# Nerien Amandes — VTuber Fan Page

## 1. Concept & Vision

Одностраничный сайт-визитка для Нэриэна — дроу-эльфа с гетерохромией, вдохновлённый мрачной эстетикой Найт-Сити из Cyberpunk 2077. Сайт должен ощущаться как терминал взломанного компьютера в Найт - Сити : неоновые вспышки, глитч-эффекты и атмосфера технологичного декаданса. Посетитель попадает в цифровое пространство, где магия дроу встречается с неоновыми технологиями.

## 2. Design Language

### Aesthetic Direction
Cyberpunk 2077 UI + дроу-эстетика. Тёмные фоны с неоновыми акцентами, глитч-эффекты на hover, "голографические" карточки, сканлайны.

### Color Palette
- **Primary (Neon Cyan):** `#00f0ff`
- **Secondary (Neon Magenta):** `#ff00a0`
- **Accent (Cyber Yellow):** `#fcee0a`
- **Background Dark:** `#0a0a0f`
- **Background Card:** `#12121a`
- **Text Primary:** `#e0e0e0`
- **Text Muted:** `#6a6a7a`
- **Danger/Glitch Red:** `#ff3333`

### Typography
- **Headings:** `Orbitron` (Google Fonts) — футуристичный, угловатый
- **Body:** `Rajdhani` (Google Fonts) — читаемый, техно-стиль
- **Fallback:** `monospace`

### Spatial System
- Base unit: 8px
- Container max-width: 1200px
- Card padding: 24px
- Gap between sections: 64px

### Motion Philosophy
- **Glitch effect** на заголовках при hover — случайные смещения RGB-каналов
- **Scanlines overlay** — тонкая анимированная решётка поверх страницы
- **Neon pulse** — мягкое мерцание неоновых границ карточек
- **Fade-in** — элементы появляются с небольшой задержкой при загрузке
- **Hover lift** — карточки слегка поднимаются и усиливают свечение

### Visual Assets
- Аватар: placeholder-изображение дроу-эльфийки (стилизованное)
- Иконки: Font Awesome 6 (социальные сети)
- Декоративные элементы: CSS-генерируемые сканлайны, noise overlay

## 3. Layout & Structure

### Page Structure
```
[Scanlines Overlay - fixed, pointer-events: none]
[Header - logo/title with glitch effect]
    └── "NERIEN AMANDES" title
    └── Subtitle: "Drow Elf | Cyberpunk Enthusiast"
[Hero Section]
    └── Large avatar (circular with neon border glow)
    └── Brief tagline about the character
[Links Section - cards grid]
    └── Support card
    └── Telegram channel card
    └── TikTok card
    └── YouTube card
    └── Twitch card
[Footer]
    └── "Powered by Night City" + year
```

### Responsive Strategy
- Desktop: 3-column grid for links
- Tablet (< 900px): 2-column grid
- Mobile (< 600px): 1-column stack
- Avatar scales down gracefully

## 4. Features & Interactions

### Core Features
1. **Animated Avatar Display** — круглый аватар с пульсирующей неоновой границей
2. **Social Links Grid** — 5 карточек с иконками и описаниями
3. **Glitch Title** — заголовок с RGB-глитчем при наведении
4. **Scanlines Effect** — атмосферный оверлей

### Interaction Details
- **Card Hover:** карточка поднимается (transform: translateY(-4px)), усиливается box-shadow, граница становится ярче
- **Link Hover:** неоновый glow effect, scale(1.02)
- **Title Glitch:** при hover случайным образом смещаются красный и синий каналы на 2-4px
- **Avatar:** постоянное мягкое свечение, при hover — усиление

### Edge Cases
- Все ссылки открываются в новой вкладке (target="_blank")
- Все внешние ссылки имеют rel="noopener noreferrer"

## 5. Component Inventory

### Avatar Component
- **Default:** 200px круглое изображение, двойная граница (magenta + cyan), мягкое свечение
- **Hover:** усиленное свечение, лёгкий scale(1.05)
- **Container:** тёмный фон с градиентом

### Social Link Card
- **Default:** тёмный фон (#12121a), тонкая граница (1px, semi-transparent cyan), иконка + название + описание
- **Hover:** подъём, усиление границы до полной яркости, glow effect
- **Active:** кратковременная вспышка

### Glitch Text
- **Default:** обычный текст белым цветом
- **Hover:** RGB-смещение (красный канал влево, синий вправо), случайные искажения

### Scanlines Overlay
- Фиксированный оверлей на всю страницу
- Полупрозрачные горизонтальные линии
- pointer-events: none

## 6. Technical Approach

- **Framework:** Vanilla HTML5 + CSS3 + JavaScript
- **Single file:** index.html (все стили и скрипты инлайн)
- **External resources:**
  - Google Fonts: Orbitron, Rajdhani
  - Font Awesome 6 (CDN)
- **No build step required**
- **Browser support:** современные браузеры (Chrome, Firefox, Edge, Safari)
