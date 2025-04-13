import { Test, TestingModule } from '@nestjs/testing';
import { PackageItemService } from './package_item.service';

describe('PackageItemService', () => {
  let service: PackageItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackageItemService],
    }).compile();

    service = module.get<PackageItemService>(PackageItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
