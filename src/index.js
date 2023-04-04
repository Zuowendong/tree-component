#! /usr/bin/env node

import { Command } from "commander";
import { onCreate } from "./commands/create";

const program = new Command();
program.command("create").description("some msg").option("-t --type <type>", "type msg").action(onCreate);
program.parse();
