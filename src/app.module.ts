import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { SkillsModule } from './skills/skills.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [AboutModule, SkillsModule, ExperienceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
