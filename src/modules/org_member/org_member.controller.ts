import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrgMemberService } from './org_member.service';
import { CreateOrgMemberDto } from './dto/create-org_member.dto';
import { UpdateOrgMemberDto } from './dto/update-org_member.dto';

@Controller('org-member')
export class OrgMemberController {
  constructor(private readonly orgMemberService: OrgMemberService) {}

  @Post()
  create(@Body() createOrgMemberDto: CreateOrgMemberDto) {
    return this.orgMemberService.create(createOrgMemberDto);
  }

  @Get()
  findAll() {
    return this.orgMemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orgMemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrgMemberDto: UpdateOrgMemberDto) {
    return this.orgMemberService.update(+id, updateOrgMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orgMemberService.remove(+id);
  }
}
