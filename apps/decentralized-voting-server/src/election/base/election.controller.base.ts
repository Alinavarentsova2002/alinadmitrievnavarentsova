/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ElectionService } from "../election.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ElectionCreateInput } from "./ElectionCreateInput";
import { Election } from "./Election";
import { ElectionFindManyArgs } from "./ElectionFindManyArgs";
import { ElectionWhereUniqueInput } from "./ElectionWhereUniqueInput";
import { ElectionUpdateInput } from "./ElectionUpdateInput";
import { VoteFindManyArgs } from "../../vote/base/VoteFindManyArgs";
import { Vote } from "../../vote/base/Vote";
import { VoteWhereUniqueInput } from "../../vote/base/VoteWhereUniqueInput";
import { CandidateFindManyArgs } from "../../candidate/base/CandidateFindManyArgs";
import { Candidate } from "../../candidate/base/Candidate";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ElectionControllerBase {
  constructor(
    protected readonly service: ElectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Election })
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createElection(
    @common.Body() data: ElectionCreateInput
  ): Promise<Election> {
    return await this.service.createElection({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        startDate: true,
        endDate: true,
        isActive: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Election] })
  @ApiNestedQuery(ElectionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async elections(@common.Req() request: Request): Promise<Election[]> {
    const args = plainToClass(ElectionFindManyArgs, request.query);
    return this.service.elections({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        startDate: true,
        endDate: true,
        isActive: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Election })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async election(
    @common.Param() params: ElectionWhereUniqueInput
  ): Promise<Election | null> {
    const result = await this.service.election({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        startDate: true,
        endDate: true,
        isActive: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Election })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateElection(
    @common.Param() params: ElectionWhereUniqueInput,
    @common.Body() data: ElectionUpdateInput
  ): Promise<Election | null> {
    try {
      return await this.service.updateElection({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          startDate: true,
          endDate: true,
          isActive: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Election })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteElection(
    @common.Param() params: ElectionWhereUniqueInput
  ): Promise<Election | null> {
    try {
      return await this.service.deleteElection({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          startDate: true,
          endDate: true,
          isActive: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/votes")
  @ApiNestedQuery(VoteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vote",
    action: "read",
    possession: "any",
  })
  async findVotes(
    @common.Req() request: Request,
    @common.Param() params: ElectionWhereUniqueInput
  ): Promise<Vote[]> {
    const query = plainToClass(VoteFindManyArgs, request.query);
    const results = await this.service.findVotes(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        timestamp: true,

        voter: {
          select: {
            id: true,
          },
        },

        candidate: {
          select: {
            id: true,
          },
        },

        election: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/votes")
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "update",
    possession: "any",
  })
  async connectVotes(
    @common.Param() params: ElectionWhereUniqueInput,
    @common.Body() body: VoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      votes: {
        connect: body,
      },
    };
    await this.service.updateElection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/votes")
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "update",
    possession: "any",
  })
  async updateVotes(
    @common.Param() params: ElectionWhereUniqueInput,
    @common.Body() body: VoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      votes: {
        set: body,
      },
    };
    await this.service.updateElection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/votes")
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "update",
    possession: "any",
  })
  async disconnectVotes(
    @common.Param() params: ElectionWhereUniqueInput,
    @common.Body() body: VoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      votes: {
        disconnect: body,
      },
    };
    await this.service.updateElection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/candidates")
  @ApiNestedQuery(CandidateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "read",
    possession: "any",
  })
  async findCandidates(
    @common.Req() request: Request,
    @common.Param() params: ElectionWhereUniqueInput
  ): Promise<Candidate[]> {
    const query = plainToClass(CandidateFindManyArgs, request.query);
    const results = await this.service.findCandidates(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        voteCount: true,
        name: true,

        election: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/candidates")
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "update",
    possession: "any",
  })
  async connectCandidates(
    @common.Param() params: ElectionWhereUniqueInput,
    @common.Body() body: CandidateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      candidates: {
        connect: body,
      },
    };
    await this.service.updateElection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/candidates")
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "update",
    possession: "any",
  })
  async updateCandidates(
    @common.Param() params: ElectionWhereUniqueInput,
    @common.Body() body: CandidateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      candidates: {
        set: body,
      },
    };
    await this.service.updateElection({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/candidates")
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "update",
    possession: "any",
  })
  async disconnectCandidates(
    @common.Param() params: ElectionWhereUniqueInput,
    @common.Body() body: CandidateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      candidates: {
        disconnect: body,
      },
    };
    await this.service.updateElection({
      where: params,
      data,
      select: { id: true },
    });
  }
}
