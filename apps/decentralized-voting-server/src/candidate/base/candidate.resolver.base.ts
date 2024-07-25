/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Candidate } from "./Candidate";
import { CandidateCountArgs } from "./CandidateCountArgs";
import { CandidateFindManyArgs } from "./CandidateFindManyArgs";
import { CandidateFindUniqueArgs } from "./CandidateFindUniqueArgs";
import { CreateCandidateArgs } from "./CreateCandidateArgs";
import { UpdateCandidateArgs } from "./UpdateCandidateArgs";
import { DeleteCandidateArgs } from "./DeleteCandidateArgs";
import { VoteFindManyArgs } from "../../vote/base/VoteFindManyArgs";
import { Vote } from "../../vote/base/Vote";
import { Election } from "../../election/base/Election";
import { CandidateService } from "../candidate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Candidate)
export class CandidateResolverBase {
  constructor(
    protected readonly service: CandidateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "read",
    possession: "any",
  })
  async _candidatesMeta(
    @graphql.Args() args: CandidateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Candidate])
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "read",
    possession: "any",
  })
  async candidates(
    @graphql.Args() args: CandidateFindManyArgs
  ): Promise<Candidate[]> {
    return this.service.candidates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Candidate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "read",
    possession: "own",
  })
  async candidate(
    @graphql.Args() args: CandidateFindUniqueArgs
  ): Promise<Candidate | null> {
    const result = await this.service.candidate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Candidate)
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "create",
    possession: "any",
  })
  async createCandidate(
    @graphql.Args() args: CreateCandidateArgs
  ): Promise<Candidate> {
    return await this.service.createCandidate({
      ...args,
      data: {
        ...args.data,

        election: args.data.election
          ? {
              connect: args.data.election,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Candidate)
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "update",
    possession: "any",
  })
  async updateCandidate(
    @graphql.Args() args: UpdateCandidateArgs
  ): Promise<Candidate | null> {
    try {
      return await this.service.updateCandidate({
        ...args,
        data: {
          ...args.data,

          election: args.data.election
            ? {
                connect: args.data.election,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Candidate)
  @nestAccessControl.UseRoles({
    resource: "Candidate",
    action: "delete",
    possession: "any",
  })
  async deleteCandidate(
    @graphql.Args() args: DeleteCandidateArgs
  ): Promise<Candidate | null> {
    try {
      return await this.service.deleteCandidate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Vote], { name: "votes" })
  @nestAccessControl.UseRoles({
    resource: "Vote",
    action: "read",
    possession: "any",
  })
  async findVotes(
    @graphql.Parent() parent: Candidate,
    @graphql.Args() args: VoteFindManyArgs
  ): Promise<Vote[]> {
    const results = await this.service.findVotes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Election, {
    nullable: true,
    name: "election",
  })
  @nestAccessControl.UseRoles({
    resource: "Election",
    action: "read",
    possession: "any",
  })
  async getElection(
    @graphql.Parent() parent: Candidate
  ): Promise<Election | null> {
    const result = await this.service.getElection(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}