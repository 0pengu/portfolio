import { GitHubClient } from "@tahminator/pipeline";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const { newTagVersion } = await yargs(hideBin(process.argv))
  .option("newTagVersion", {
    type: "string",
    demandOption: true,
  })
  .strict()
  .parse();

async function main() {
  const { githubAppAppId, githubAppInstallationId, githubAppPemContent } =
    parseCiEnv(process.env);
  const ghClient = await GitHubClient.createWithGithubAppToken({
    appId: githubAppAppId,
    installationId: githubAppInstallationId,
    privateKey: githubAppPemContent,
  });

  await ghClient.updateK8sTagWithPR({
    manifestRepo: ["tahminator", "k8s-personal"],
    originRepo: ["tahminator", "portfolio"],
    kustomizationFilePath: "apps/production/portfolio/kustomization.yaml",
    imageName: "tahminator/portfolio",
    newTag: newTagVersion,
    environment: "production",
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
