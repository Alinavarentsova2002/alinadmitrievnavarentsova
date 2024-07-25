import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ElectionModuleBase } from "./base/election.module.base";
import { ElectionService } from "./election.service";
import { ElectionController } from "./election.controller";
import { ElectionResolver } from "./election.resolver";

@Module({
  imports: [ElectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ElectionController],
  providers: [ElectionService, ElectionResolver],
  exports: [ElectionService],
})
export class ElectionModule {}
