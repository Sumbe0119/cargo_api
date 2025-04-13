import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // нэмнэ
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // энд entity-г бүртгэж байна
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
