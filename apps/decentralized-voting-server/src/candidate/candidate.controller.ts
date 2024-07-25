import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CandidateService } from "./candidate.service";
import { CandidateControllerBase } from "./base/candidate.controller.base";

@swagger.ApiTags("candidates")
@common.Controller("candidates")
export class CandidateController extends CandidateControllerBase {
  constructor(
    protected readonly service: CandidateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
