# Astroloji Uygulaması

Bu React uygulaması, astroloji ile ilgili temel bilgileri kullanıcılarla paylaşmayı amaçlayan bir uygulamadır. Anasayfada burçlar, gezegenler, astrolojiye dair haberler gibi çeşitli içerikler bulunmaktadır. Kullanıcılar giriş yaptıktan sonra kişisel bilgilerini ekleyebilir, haber paylaşabilir ve her bir içerik için detaylı bilgi alabilir.

## Özellikler

- **Anasayfa**: Burçlar, gezegenler, astroloji haberleri gösterilmektedir.
- **Login**: Kullanıcılar sisteme giriş yaptıktan sonra kişisel bilgilerini ekleyebilir ve haber ekleyebilirler.
- **Detay Sayfası**: Her bir burç, gezegen ya da haber için detaylı bilgiye ulaşılabilir.
- **Responsive Tasarım**: Uygulama, masaüstü ve mobil cihazlarda düzgün çalışacak şekilde responsive bir tasarıma sahiptir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü oluşturulmuştur.
- **React Router**: Sayfalar arası geçişler için yönlendirme.
- **React Context API**: Uygulama genelinde state yönetimi için kullanıldı.
- **Sass**: CSS için daha organize ve verimli bir yapı.
- **Json Server**: Fake API ile veri yönetimi.
- **React Toastify**: Bildirimler ve uyarılar için.
- **Axios**: API istekleri için kullanıldı.

## Proje Geliştirme Süreci

1. **Proje Başlatma**: Vite ile yeni bir React uygulaması kuruldu ve başlatıldı.
2. **Bileşenler (Components)**: Burçlar, gezegenler, haberler ve login gibi temel bileşenler oluşturuldu.
3. **Veri Yönetimi**: Kullanıcı bilgileri, burçlar, gezegenler ve haberler gibi veriler Json Server ile sağlandı.
4. **Giriş Sistemi**: LoginPage oluşturuldu. Kullanıcı giriş yaptıktan sonra kişisel veriler ve haberler eklenebilir.
5. **Responsive Yapı**: CSS Grid ve Flexbox kullanılarak uygulamanın farklı cihazlarda uyumlu olması sağlandı.
6. **Context API ve Reducer**: Proje, global state yönetimi için Context API ve useReducer yapılarıyla güçlendirildi.
7. **Detay Sayfası**: Burç, gezegen ve haberler için detaylı sayfalar oluşturuldu.
8. **Private Route**: Auth işlemi ile sadece giriş yapmış kullanıcıların özel sayfalara erişmesi sağlandı.

## Kurulum ve Çalıştırma

1. Bu projeyi bilgisayarınıza klonlayın:
```bash
 git clone https: https://github.com/hazanakpinar/astroloji-project.git
```
2. Gerekli paketleri yükleyin:

```bash
npm install
```
3. API'yi çalıştırın:

```bash
npm run api
```
4. Uygulamayı başlatın:
```bash
npm run dev
```

 
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
