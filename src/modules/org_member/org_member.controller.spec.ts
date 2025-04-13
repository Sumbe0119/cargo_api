import { Test, TestingModule } from '@nestjs/testing';
import { OrgMemberController } from './org_member.controller';
import { OrgMemberService } from './org_member.service';

describe('OrgMemberController', () => {
  let controller: OrgMemberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrgMemberController],
      providers: [OrgMemberService],
    }).compile();

    controller = module.get<OrgMemberController>(OrgMemberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
