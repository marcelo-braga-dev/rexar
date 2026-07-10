# Deploy — Rexar Site Institucional

## Opções de hospedagem recomendadas

| Plataforma | Custo | Dificuldade | Recomendado para |
|---|---|---|---|
| **Laravel Cloud** | Gratuito (hobby) | Fácil | Produção, deploy automático |
| **Railway** | Gratuito com limites | Fácil | Testes, staging |
| **Render** | Gratuito com limites | Fácil | Testes, staging |
| **VPS (DigitalOcean/Vultr)** | ~R$25/mês | Médio | Produção com controle total |

---

## Deploy via Laravel Cloud (recomendado)

1. Acesse **https://cloud.laravel.com**
2. Conecte sua conta GitHub
3. Selecione o repositório `marcelo-braga-dev/rexar`
4. Configure as variáveis de ambiente (copie do `.env.example`)
5. Deploy automático — cada push para `main` faz novo deploy

---

## Deploy manual em VPS

### Requisitos do servidor
- PHP 8.2+ com extensões: `mbstring`, `openssl`, `pdo`, `tokenizer`, `xml`, `ctype`, `json`
- Composer
- Node.js 18+
- Nginx ou Apache
- MySQL 8+ (para Fase 2 — banco de dados)

### Passos

```bash
# 1. Clonar repositório
git clone https://github.com/marcelo-braga-dev/rexar.git /var/www/rexar
cd /var/www/rexar

# 2. Instalar dependências
composer install --no-dev --optimize-autoloader
npm install

# 3. Configurar ambiente
cp .env.example .env
# Editar .env com as configurações de produção
php artisan key:generate

# 4. Build do frontend
npm run build

# 5. Permissões de pasta
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache

# 6. Otimizar para produção
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Configuração Nginx

```nginx
server {
    listen 80;
    server_name rexar.com.br www.rexar.com.br;
    root /var/www/rexar/public;

    index index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

### SSL com Certbot

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d rexar.com.br -d www.rexar.com.br
```

---

## Variáveis de ambiente para produção

```env
APP_NAME=Rexar
APP_ENV=production
APP_DEBUG=false
APP_URL=https://rexar.com.br

# Banco de dados (necessário para Fase 2)
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=rexar
DB_USERNAME=rexar_user
DB_PASSWORD=senha_segura

# E-mail (para formulário de contato)
MAIL_MAILER=smtp
MAIL_HOST=smtp.seu-provedor.com
MAIL_PORT=587
MAIL_USERNAME=contato@rexar.com.br
MAIL_PASSWORD=senha
MAIL_FROM_ADDRESS=contato@rexar.com.br
MAIL_FROM_NAME=Rexar
```

---

## Atualizações

Para atualizar o site após alterações:

```bash
git pull origin main
composer install --no-dev --optimize-autoloader
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
