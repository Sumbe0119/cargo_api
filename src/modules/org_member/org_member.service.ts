import { Injectable } from '@nestjs/common';
import { CreateOrgMemberDto } from './dto/create-org_member.dto';
import { UpdateOrgMemberDto } from './dto/update-org_member.dto';

@Injectable()
export class OrgMemberService {
  create(createOrgMemberDto: CreateOrgMemberDto) {
    return 'This action adds a new orgMember';
  }

  findAll() {
    return `This action returns all orgMember`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orgMember`;
  }

  update(id: number, updateOrgMemberDto: UpdateOrgMemberDto) {
    return `This action updates a #${id} orgMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} orgMember`;
  }
}
