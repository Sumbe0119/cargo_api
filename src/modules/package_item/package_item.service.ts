import { Injectable } from '@nestjs/common';
import { CreatePackageItemDto } from './dto/create-package_item.dto';
import { UpdatePackageItemDto } from './dto/update-package_item.dto';

@Injectable()
export class PackageItemService {
  create(createPackageItemDto: CreatePackageItemDto) {
    return 'This action adds a new packageItem';
  }

  findAll() {
    return `This action returns all packageItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packageItem`;
  }

  update(id: number, updatePackageItemDto: UpdatePackageItemDto) {
    return `This action updates a #${id} packageItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} packageItem`;
  }
}
