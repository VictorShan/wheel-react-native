# Deploying Infrastructure

This repo uses OpenTofu to deploy infrastructure. OpenTofu is a tool that allows you to deploy infrastructure using a simple configuration file. It is a wrapper around Terraform and Terragrunt.

## Prerequisites

- [OpenTofu](https://opentofu.org/docs/intro/install/)
- Have AWS credentials

## Deploying

Before you deploy to production, you need to create a bucket to store the state file. We will call
this bucket `tofu-state-camelote` for this example but that bucket name will be taken.

To deploy the infrastructure, run the following command:

```bash
tofu init \
    -backend-config="key=wheel-react-native/prod.tfstate" \
    -backend-config="bucket=tofu-state-camelote"
tofu plan -var "stage_prefix=prod"
tofu apply -var "stage_prefix=prod"
```

To deploy in a different environment, change the `key` in the `backend-config` flag.

