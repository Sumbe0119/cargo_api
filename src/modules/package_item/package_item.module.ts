import { Module } from '@nestjs/common';
import { PackageItemService } from './package_item.service';
import { PackageItemController } from './package_item.controller';

@Module({
  controllers: [PackageItemController],
  providers: [PackageItemService],
})
export class PackageItemModule {}
