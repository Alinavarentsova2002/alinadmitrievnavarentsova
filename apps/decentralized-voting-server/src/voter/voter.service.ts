import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoterServiceBase } from "./base/voter.service.base";

@Injectable()
export class VoterService extends VoterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
