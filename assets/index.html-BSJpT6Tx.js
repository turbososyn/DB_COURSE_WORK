import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e,d as a,w as n,r as l,o as i,a as r}from"./app-CE_-lEL6.js";const g={};function m(p,t){const d=l("center");return i(),s("div",null,[t[2]||(t[2]=e('<h1 id="модель-прецедентів" tabindex="-1"><a class="header-anchor" href="#модель-прецедентів"><span>Модель прецедентів</span></a></h1><h3 id="редагування-опитування" tabindex="-1"><a class="header-anchor" href="#редагування-опитування"><span>Редагування опитування</span></a></h3><table><thead><tr><th><strong>ID</strong></th><th>SurveyEditing</th></tr></thead><tbody><tr><td><strong>Назва</strong></td><td>Редагування опитування</td></tr><tr><td><strong>Учасники</strong></td><td>Адміністратор, Система</td></tr><tr><td><strong>Передумови</strong></td><td>Існуюче опитування, яке ще не завершено.</td></tr><tr><td><strong>Результат</strong></td><td>Опитування відредаговане, зміни збережено.</td></tr><tr><td><strong>Виключні ситуації</strong></td><td>Опитування вже запущено або завершено, адміністратор не має прав на редагування.</td></tr><tr><td><strong>Основний сценарій</strong></td><td>1. Адміністратор вибирає опитування для редагування. <br> 2. Вносить зміни до деталей або питань. <br> 3. Зберігає зміни. <br> 4. Система оновлює опитування.</td></tr></tbody></table>',3)),a(d,null,{default:n(()=>t[0]||(t[0]=[r("img",{src:"https://www.plantuml.com/plantuml/svg/ZLB1IiD04BtdAnQy-WL6f0MzUVCBOhArXPh89X4AESJquALOaL9lYd-GjWQZQTfVcFaZtswBj8TG5v9CzitCs_TcMs7ag2Y-xLi9FTCdBNbADK_vWJDEAUUCLfmcbi0ocRPbuXDweP9cL9gaYQ0LhV6JyP3cb5ED7cE1TXK-I2aGvhJOHT4eeG_KW0dual9as_cT2bConp5I7lFaMF0ZbOqSAtFO8S2QYaEaci8F8YbKxwORYQDEny4ostgTNfy98wt6ywEbxK5jrvLXU2xzdlGkb0hK7deLgtivQFULTBp1fHFxRdStJVgUeROEMwtjhRKmetSaw6kJhLs0OFqga9zJ1PNV0i5Cxnfxj5OUsTi-hq1W9ueNcq7zTMeUm9lcXcaLFpMCrhR-Srs2EzjgGJLkroy0",alt:"uml diagram",loading:"lazy"},null,-1),r("p",null,[r("strong",null,"Діаграма редагування опитування")],-1)])),_:1}),t[3]||(t[3]=e('<h3 id="оцінка-опитування" tabindex="-1"><a class="header-anchor" href="#оцінка-опитування"><span>Оцінка опитування</span></a></h3><table><thead><tr><th><strong>ID</strong></th><th>SurveyReviewByExpertProcess</th></tr></thead><tbody><tr><td><strong>Назва</strong></td><td>Оцінка опитування</td></tr><tr><td><strong>Учасники</strong></td><td>Користувач (експерт), Система</td></tr><tr><td><strong>Передумови</strong></td><td>Користувач завершив опитування та авторизований.</td></tr><tr><td><strong>Результат</strong></td><td>Відгук збережено та доступний адміністратору.</td></tr><tr><td><strong>Виключні ситуації</strong></td><td>Відгук не збережено через технічні проблеми, користувач не має прав залишити відгук.</td></tr><tr><td><strong>Основний сценарій</strong></td><td>1. Користувач завершує опитування. <br> 2. Залишає відгук та оцінку. <br> 3. Система зберігає відгук. <br> 4. Адміністратор може переглядати відгуки.</td></tr></tbody></table>',2)),a(d,null,{default:n(()=>t[1]||(t[1]=[r("img",{src:"https://www.plantuml.com/plantuml/svg/bL4xJiD04ErzYfLeu0euGccu07014pR4Kh3HOaBZmh4bI1Sf0YFHSGCJEv9nOkSARsx4x3g1H8Y2gNRdlNblFjsxm571_StG2l66XYAKDAQO4ioHqPCun0ig6cED1KKK7uMMu315jcNUntX5ncoDJoYXPu66wULM13Lgcjext2M34rPdvfnI5CYPMGcAaN4jFNAkPjE43KAyjmrXWHMoy5lbm_Ybo7_fj4wU7qYXtEj180xwVOV3f7LqBay4PYZPf4Ibw_UWCpbovSEvCvAdIlbg3xkGlO7dzfpX3oIzAsFsPw-pdH7vqMpMkpRsduBtKM2bHwRKG15t5EjBKABvIvgATliic-ilYirg_dCl_zQskjmhN_eB",alt:"uml diagram",loading:"lazy"},null,-1),r("p",null,[r("strong",null,"Діаграма оцінки опитування")],-1)])),_:1}),t[4]||(t[4]=e('<h3 id="створення-опитування" tabindex="-1"><a class="header-anchor" href="#створення-опитування"><span>Створення опитування</span></a></h3><table><thead><tr><th><strong>ID</strong></th><th>SurveyCreation</th></tr></thead><tbody><tr><td><strong>Назва</strong></td><td>Створення опитування</td></tr><tr><td><strong>Учасники</strong></td><td>Адміністратор, Система</td></tr><tr><td><strong>Передумови</strong></td><td>Адміністратор авторизований на платформі та має права для створення опитування.</td></tr><tr><td><strong>Результат</strong></td><td>Створене нове опитування з доданими питаннями.</td></tr><tr><td><strong>Виключні ситуації</strong></td><td>Недостатньо прав для створення опитування, відсутні необхідні дані (назва, опис тощо).</td></tr><tr><td><strong>Основний сценарій</strong></td><td>1. Адміністратор входить на платформу. <br> 2. Вибирає опцію створення нового опитування. <br> 3. Вводить назву, опис та додає питання. <br> 4. Зберігає опитування. <br> 5. Опитування стає доступним для експертів.</td></tr></tbody></table><img src="https://www.plantuml.com/plantuml/svg/bLJ1Rjf04Btp5QlacY-0g08fS4iFvTgBYJU99MDNQwSg4WS8Ib4aHA88mQcjyWSEWOGwmVp2x1_bxIoKfA5fwuDbpxvvR-RDsCKeTbHyKlTpJRga2Jtg8StrKBVrgMvHeayfqwrcJfYBeGNxZ7kUhlGPPKYQ0TmJD1QwZMUaqXH4dGA3ljCDWePh881UwA-WxtyCjkWQmB7X1tmErGi-PxOE3X8Rt5egicQJhjSAb3HPuGTDcMCCufQ-C3eB8sWu1AMim4cMLdSfCPn164kXlAFZM6mV7ZguhD1kxPtuu7YHZDRlfOC36KLxCl2aMrOgL3YIWSiSByfxqyCyZL3L0bsE0UYRGkyHk4NWWOCPfJkhYZFafJIZdojNsjRF0LlERh9NAvzsX3wdJE0b0TkKxeoo6Sjldkg-vVd6bO4MAioM8jLWKzqnqnbXRjRNMuDxDeP_7SA4vOPSac3n1pWp-ULDxt-dK0bLpNDT6LGRzLheHwj9B8_VXt79z_UTm7NYK3KgdlJTgEBv_eQPRMfYOnkmjKip0VTGjh4AJVJGqNJZibgJ_jJJwwvif7gYFij6oLVISHlbBruKFsljnPhbrn-DtPyvxyrRnVnzBSNowmu_5JYX24dy4Pu0" alt="uml diagram" loading="lazy"><p>** Діаграма створення опитування **</p><h3 id="реєстреція-експерта-на-платформі" tabindex="-1"><a class="header-anchor" href="#реєстреція-експерта-на-платформі"><span>Реєстреція експерта на платформі</span></a></h3><table><thead><tr><th><strong>ID</strong></th><th>UserRegistration</th></tr></thead><tbody><tr><td><strong>Назва</strong></td><td>Реєстрація експерта на платформі</td></tr><tr><td><strong>Учасники</strong></td><td>Користувач (експерт), Система</td></tr><tr><td><strong>Передумови</strong></td><td>Користувач не має акаунту на платформі.</td></tr><tr><td><strong>Результат</strong></td><td>Створено акаунт експерта з підтвердженою електронною адресою та спеціалізацією.</td></tr><tr><td><strong>Виключні ситуації</strong></td><td>Неправильна або вже зареєстрована електронна адреса, помилки у формі.</td></tr><tr><td><strong>Основний сценарій</strong></td><td>1. Користувач заповнює реєстраційну форму. <br> 2. Підтверджує email через посилання. <br> 3. Отримує доступ до платформи.</td></tr></tbody></table><img src="https://www.plantuml.com/plantuml/svg/dPJBRjDG48RtUOgZi8KNQ11g5yqE5dJRZLExnP9ZLxOZ4IcBu21WKJKIYbm9SH5lO58NGkAaUrOpRyG_Ssf5eZKtIxRFPSxCD_-ClPkaJfmE-a5hHEzemsDQy0lEU49pAlZrg6NaKgEE7UEvGn-mcOafBJ6Q6RpMjA5hMlBaC6mV-2UX6Pos3SqDNM9ZXNkk9fKOK4LNjERpJWlUHlJP1iLQHSL80xpbd4fu0u-Ip0o_L3oSDtXTyKmvnzXxnJbV29qwQyXYXowe0A1oyBamR-YBJ7zKFALlo01ZpetQh7ZQ-RT4rrHi4VF3i8cnrl3Eh3_X3Cu91uzvAl5AKAy5Im98Ec0JQR2cpi_4QHYbdedzasUfkNTyxE2oaHxs7fcdZfzuoNRUZUAUxxfUU33izw8WsO_ZADvkFudIlI1ux8IkaqRniEjxWPjq_I3mtDhI2rsDs8GikWgaAehwVJUGLxH7lgYzAZMH14HJM9xzVp9xHqVH80Hnx3dkSF-vdwJ9dPYe8vMeuWAjA7Nq-euVc0UejgY9AimrZvA-IcS2Q6h-NC76LhlTlR3CT5f9FQqeAtlqHXB4NU5Ugjr66NAnGZlo6opcVzUGWrxVJsrwxURFwsDDmnFnKPSd4pqG7KZDkgXl2_CU26E9R45kgK75VOEFQzaeCyZnUx2g_bxINuXBs5cRQvs8JbBPhFu6QQ7Pcvl_LtJQqHYxw0hyxNu2" alt="uml diagram" loading="lazy"><p>** Діаграма реєстрація експерта на платформі **</p>',8))])}const u=o(g,[["render",m],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/use%20cases/","title":"Модель прецедентів","lang":"en-US","frontmatter":{"description":"Модель прецедентів Редагування опитування Оцінка опитування Створення опитування uml diagram ** Діаграма створення опитування ** Реєстреція експерта на платформі uml diagram ** ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/DB_COURSE_WORK/use%20cases/"}],["meta",{"property":"og:site_name","content":"PulseVote"}],["meta",{"property":"og:title","content":"Модель прецедентів"}],["meta",{"property":"og:description","content":"Модель прецедентів Редагування опитування Оцінка опитування Створення опитування uml diagram ** Діаграма створення опитування ** Реєстреція експерта на платформі uml diagram ** ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T20:40:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T20:40:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Модель прецедентів\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T20:40:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"Редагування опитування","slug":"редагування-опитування","link":"#редагування-опитування","children":[]},{"level":3,"title":"Оцінка опитування","slug":"оцінка-опитування","link":"#оцінка-опитування","children":[]},{"level":3,"title":"Створення опитування","slug":"створення-опитування","link":"#створення-опитування","children":[]},{"level":3,"title":"Реєстреція експерта на платформі","slug":"реєстреція-експерта-на-платформі","link":"#реєстреція-експерта-на-платформі","children":[]}],"git":{"createdTime":1708081508000,"updatedTime":1731357613000,"contributors":[{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":2},{"name":"Maks","email":"143129096+manabr0w@users.noreply.github.com","commits":2},{"name":"Kirizii","email":"143125175+Kirizii@users.noreply.github.com","commits":1},{"name":"Yaroslav Vysotskyi","email":"77899310+Yaroslav702@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.72,"words":516},"filePathRelative":"use cases/README.md","localizedDate":"February 16, 2024","autoDesc":true}');export{u as comp,b as data};
