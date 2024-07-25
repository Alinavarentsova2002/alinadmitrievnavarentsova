import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ElectionServiceBase } from "./base/election.service.base";

@Injectable()
export class ElectionService extends ElectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
