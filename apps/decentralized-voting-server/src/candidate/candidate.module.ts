import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CandidateModuleBase } from "./base/candidate.module.base";
import { CandidateService } from "./candidate.service";
import { CandidateController } from "./candidate.controller";
import { CandidateResolver } from "./candidate.resolver";

@Module({
  imports: [CandidateModuleBase, forwardRef(() => AuthModule)],
  controllers: [CandidateController],
  providers: [CandidateService, CandidateResolver],
  exports: [CandidateService],
})
export class CandidateModule {}
