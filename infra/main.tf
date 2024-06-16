terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.54"
    }
  }
}


variable "stage_prefix" {
  type     = string
  default  = "dev"
  nullable = false
}

provider "aws" {
  region = "us-west-2"
  default_tags {
    tags = {
      "Terraform"   = "true"
      "Environment" = var.stage_prefix
      "Project"     = "wheel-react-native"
    }
  }
}

resource "aws_dynamodb_table" "lobbies" {
  name         = "${var.stage_prefix}-Lobbies"
  billing_mode = "PAY_PER_REQUEST"

  hash_key = "Id"
  attribute {
    name = "Id"
    type = "S"
  }

  ttl {
    attribute_name = "TTL"
    enabled        = true
  }
}

resource "aws_dynamodb_table" "users" {
  name         = "${var.stage_prefix}-Users"
  billing_mode = "PAY_PER_REQUEST"

  hash_key = "Id"
  attribute {
    name = "Id"
    type = "S"
  }
}