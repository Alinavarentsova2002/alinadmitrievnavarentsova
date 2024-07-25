import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoterService } from "./voter.service";
import { VoterControllerBase } from "./base/voter.controller.base";

@swagger.ApiTags("voters")
@common.Controller("voters")
export class VoterController extends VoterControllerBase {
  constructor(
    protected readonly service: VoterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
