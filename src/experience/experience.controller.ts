import { Controller, Get } from '@nestjs/common';

@Controller('experience')
export class ExperienceController {
  @Get()
  getExperience() {
    return [
      {
        company: 'Agencia XYZ',
        role: 'Desarrollador Full Stack',
        period: '2022 - 2024',
        description: 'Desarrollos de plugins a medida para WordPress y sistemas de cotización para e-commerce.',
      },
      {
        company: 'Freelancer',
        role: 'Consultor e Integrador',
        period: '2020 - 2022',
        description: 'Integración de WooCommerce con sistemas como MercadoLibre, Shopify y SoftRestaurant.',
      },
    ];
  }
}
