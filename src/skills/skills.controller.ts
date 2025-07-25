import { Controller, Get } from '@nestjs/common';

@Controller('skills')
export class SkillsController {
  @Get()
  getSkills() {
    return [
      'JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'React', 'Python',
      'Django', 'WordPress', 'WooCommerce', 'Docker', 'GraphQL',
    ];
  }
}
