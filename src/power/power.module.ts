import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  //by default, providers can only be accessed by this module
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
