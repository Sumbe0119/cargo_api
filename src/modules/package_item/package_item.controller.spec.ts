import { Test, TestingModule } from '@nestjs/testing';
import { PackageItemController } from './package_item.controller';
import { PackageItemService } from './package_item.service';

describe('PackageItemController', () => {
  let controller: PackageItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageItemController],
      providers: [PackageItemService],
    }).compile();

    controller = module.get<PackageItemController>(PackageItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
