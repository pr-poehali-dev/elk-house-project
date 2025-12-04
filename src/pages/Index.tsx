import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш дизайнер свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolio = [
    {
      id: 1,
      title: 'Современная квартира',
      category: 'Жилые помещения',
      image: 'https://cdn.poehali.dev/projects/aa71188a-7c37-49d8-a748-c6f42d3d8e41/files/2c788410-2444-448c-b97c-811b2b53288e.jpg'
    },
    {
      id: 2,
      title: 'Офис премиум-класса',
      category: 'Коммерческие помещения',
      image: 'https://cdn.poehali.dev/projects/aa71188a-7c37-49d8-a748-c6f42d3d8e41/files/0d52ac7b-f748-4416-93f5-cae9eac2b724.jpg'
    },
    {
      id: 3,
      title: 'Загородный дом',
      category: 'Частные дома',
      image: 'https://cdn.poehali.dev/projects/aa71188a-7c37-49d8-a748-c6f42d3d8e41/files/f56cd270-ad61-4d29-b4e2-253ab660bbf4.jpg'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Квартиры и дома',
      description: 'Создаем уютные пространства для комфортной жизни'
    },
    {
      icon: 'Building2',
      title: 'Коммерческие помещения',
      description: 'Дизайн офисов, магазинов и ресторанов'
    },
    {
      icon: 'Palette',
      title: 'Полный цикл',
      description: 'От дизайн-проекта до реализации под ключ'
    },
    {
      icon: 'Sparkles',
      title: '3D визуализация',
      description: 'Увидьте результат до начала ремонта'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Превосходная работа! Команда ELK-HOUSE воплотила все наши мечты в реальность.',
      rating: 5
    },
    {
      name: 'Сергей Иванов',
      text: 'Профессиональный подход, точные сроки и отличный результат. Рекомендую!',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      text: 'Наш офис преобразился до неузнаваемости. Сотрудники в восторге от нового интерьера.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={24} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ELK-HOUSE</span>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-accent transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-accent transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-accent transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-accent transition-colors">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="hidden md:block">
            Консультация
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              Создаём уют<br />в вашем пространстве
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Дизайн интерьера коммерческих помещений, квартир и домов с заботой о деталях
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="text-lg px-8">
                Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Комплексный подход к созданию идеального интерьера
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Реализованные проекты, которыми мы гордимся
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden group cursor-pointer animate-scale-in hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent mb-2 font-medium">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нашей работе
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Бесплатная консультация</h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и наш дизайнер свяжется с вами для обсуждения вашего проекта
            </p>
          </div>
          <Card className="p-8 md:p-12 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Как вас зовут?"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Расскажите о вашем проекте
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Опишите, что вы хотите создать..."
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                Получить консультацию
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-2xl font-bold">ELK-HOUSE</span>
              </div>
              <p className="text-primary-foreground/80">
                Создаём уют в коммерческих помещениях, квартирах и домах
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@elk-house.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-0">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-0">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-0">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 ELK-HOUSE. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
