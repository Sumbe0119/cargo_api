import { Module } from '@nestjs/common';
import { OrgMemberService } from './org_member.service';
import { OrgMemberController } from './org_member.controller';

@Module({
  controllers: [OrgMemberController],
  providers: [OrgMemberService],
})
export class OrgMemberModule {}
