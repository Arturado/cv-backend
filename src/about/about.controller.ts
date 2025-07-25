import { Controller, Get } from '@nestjs/common';

@Controller('about')
export class AboutController {
  @Get()
  getAbout() {
    return {
      name: 'Arturo Vásquez',
      title: 'Full Stack Developer',
      description: 'Desarrollador con experiencia en integración de sistemas, middleware, APIs y soluciones e-commerce.',
      location: 'Chile',
    };
  }
}
