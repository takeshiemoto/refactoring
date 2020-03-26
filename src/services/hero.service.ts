import { Hero } from '@/entities/hero.entity';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export default class HeroService {
  private static instance: HeroService;
  private heroes: Hero[] = HEROES;

  public static getInstance(): HeroService {
    if (!HeroService.instance) {
      HeroService.instance = new HeroService();
    }
    return HeroService.instance;
  }

  public async getAll(): Promise<Hero[]> {
    return this.heroes;
  }

  public async getHeroById(id: number): Promise<Hero | undefined> {
    return this.heroes.find(hero => hero.id === id);
  }
}
