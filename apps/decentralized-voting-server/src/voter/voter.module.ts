import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoterModuleBase } from "./base/voter.module.base";
import { VoterService } from "./voter.service";
import { VoterController } from "./voter.controller";
import { VoterResolver } from "./voter.resolver";

@Module({
  imports: [VoterModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoterController],
  providers: [VoterService, VoterResolver],
  exports: [VoterService],
})
export class VoterModule {}
