import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PackageItemService } from './package_item.service';
import { CreatePackageItemDto } from './dto/create-package_item.dto';
import { UpdatePackageItemDto } from './dto/update-package_item.dto';

@Controller('package-item')
export class PackageItemController {
  constructor(private readonly packageItemService: PackageItemService) {}

  @Post()
  create(@Body() createPackageItemDto: CreatePackageItemDto) {
    return this.packageItemService.create(createPackageItemDto);
  }

  @Get()
  findAll() {
    return this.packageItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packageItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackageItemDto: UpdatePackageItemDto) {
    return this.packageItemService.update(+id, updatePackageItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packageItemService.remove(+id);
  }
}
