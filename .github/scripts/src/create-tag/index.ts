import {
  GitHubClient,
  VersioningClient,
  VersionUpdatingStrategy,
} from "@tahminator/pipeline";

export async function main() {
  const { githubAppAppId, githubAppInstallationId, githubAppPemContent } =
    parseCiEnv(process.env);

  const ghClient = await GitHubClient.createWithGithubAppToken({
    appId: githubAppAppId,
    installationId: githubAppInstallationId,
    privateKey: githubAppPemContent,
  });

  const versioningClient = new VersioningClient(
    ghClient,
    VersionUpdatingStrategy.JSTS,
  );

  const rootPkgJson: { version: string } =
    await Bun.file("./package.json").json();

  await ghClient.createTag({
    nextTag: await versioningClient.next(rootPkgJson.version),
    onPreTagCreate: async (tag) => {
      await versioningClient.update(tag);
    },
  });
}

function parseCiEnv(ciEnv: Record<string, string | undefined>) {
  const githubAppAppId = (() => {
    const v = ciEnv["_GITHUB_APP_APP_ID"];
    if (!v) {
      throw new Error("Missing _GITHUB_APP_APP_ID from .env.ci");
    }
    return v;
  })();

  const githubAppInstallationId = (() => {
    const v = ciEnv["_GITHUB_APP_INSTALLATION_ID"];
    if (!v) {
      throw new Error("Missing _GITHUB_APP_INSTALLATION_ID from .env.ci");
    }
    return v;
  })();

  const githubAppPemContent = (() => {
    const v = ciEnv["_GITHUB_APP_PEM_CONTENT"];
    if (!v) {
      throw new Error("Missing _GITHUB_APP_PEM_CONTENT from .env.ci");
    }
    return v;
  })();

  return { githubAppAppId, githubAppInstallationId, githubAppPemContent };
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
