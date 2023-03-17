let products;
const feed = document.querySelector('#productFeed');

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data.products;
    //console.log(products);
  })
  .catch(error => {
    console.error('Error:', error);
});

setTimeout(() => {MyFunction(products)}, 100);
function MyFunction(data){
    data.forEach(item => {
        const card = document.createElement('div');
        card.setAttribute('class', 'col-lg-4 col-md-6 col-sm-12 product-card');
        card.setAttribute('product-status', item.status);
        card.innerHTML = `
            <div class="product-image-container">
                <a href="#">
                    <img src="${item.image}" alt="${item.title}">
                </a>
            </div>
            <div class="product-details-container">
                <div class="product-title">
                    <a href="#">${item.title}</a>
                </div>
                <div class="pricing-details">
                    <div class="price-container VAT">
                        <span class="pricing">
                            £${item.price_vat}
                        </span>
                        <span class="pricing-caption">
                            with VAT
                        </span>
                    </div>
                    <div class="price-container no-VAT">
                        <span class="pricing">
                            £${item.price_no_vat}
                        </span>
                        <span class="pricing-caption">
                            Without VAT
                        </span>
                    </div>
                    <button class="BTN text-icon add-to-cart">
                        Add 
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M11.1836 21.3672C12.012 21.3672 12.6836 22.0388 12.6836 22.8672C12.6836 23.6956 12.012 24.3672 11.1836 24.3672C10.3552 24.3672 9.68359 23.6956 9.68359 22.8672C9.68359 22.0388 10.3552 21.3672 11.1836 21.3672Z" stroke="#00133F" stroke-width="1.5"/>
                            <path d="M20.1836 21.3673C21.012 21.3673 21.6836 22.0388 21.6836 22.8673C21.6836 23.6957 21.012 24.3673 20.1836 24.3673C19.3552 24.3673 18.6836 23.6957 18.6836 22.8673C18.6836 22.0388 19.3552 21.3673 20.1836 21.3673Z" stroke="#00133F" stroke-width="1.5"/>
                            <path d="M5.9448 6.45902L6.19356 5.75148L6.19356 5.75148L5.9448 6.45902ZM5.93235 5.65964C5.54159 5.52226 5.11343 5.72766 4.97605 6.11843C4.83866 6.5092 5.04407 6.93735 5.43484 7.07473L5.93235 5.65964ZM8.26943 7.69017L8.88866 7.26702L8.88866 7.26702L8.26943 7.69017ZM9.57131 17.9534L9.02705 18.4694L9.02705 18.4694L9.57131 17.9534ZM24.3414 13.2499L25.0759 13.4013L25.0769 13.3967L24.3414 13.2499ZM23.8416 15.6747L24.5762 15.8261L24.5762 15.8261L23.8416 15.6747ZM24.4181 10.0643L23.8236 10.5216L23.8236 10.5216L24.4181 10.0643ZM22.8172 18.4176L22.3434 17.8362L22.3434 17.8362L22.8172 18.4176ZM9.39167 13.1272V10.4055H7.89167V13.1272H9.39167ZM6.19356 5.75148L5.93235 5.65964L5.43484 7.07473L5.69604 7.16657L6.19356 5.75148ZM14.6211 19.6172H19.924V18.1172H14.6211V19.6172ZM9.39167 10.4055C9.39167 9.69839 9.39269 9.10828 9.34079 8.62876C9.28706 8.13237 9.17064 7.67966 8.88866 7.26702L7.65021 8.11332C7.74047 8.24541 7.81017 8.42683 7.8495 8.79018C7.89065 9.17038 7.89167 9.6656 7.89167 10.4055H9.39167ZM5.69604 7.16657C6.36365 7.40129 6.80241 7.55683 7.12525 7.71524C7.42848 7.86403 7.56215 7.98446 7.65021 8.11332L8.88866 7.26702C8.60448 6.85115 8.22663 6.58482 7.786 6.36861C7.36499 6.16204 6.82755 5.97437 6.19356 5.75148L5.69604 7.16657ZM7.89167 13.1272C7.89167 14.5797 7.9053 15.6271 8.04236 16.4273C8.18868 17.2816 8.48081 17.8932 9.02705 18.4694L10.1156 17.4373C9.79541 17.0997 9.62272 16.769 9.52083 16.1741C9.40966 15.525 9.39167 14.6162 9.39167 13.1272H7.89167ZM14.6211 18.1172C13.2043 18.1172 12.2212 18.1154 11.4806 18.0104C10.7657 17.909 10.3881 17.7248 10.1156 17.4373L9.02705 18.4694C9.62091 19.0957 10.3737 19.3684 11.27 19.4955C12.1403 19.619 13.2489 19.6172 14.6211 19.6172V18.1172ZM8.64167 10.2372H20.7724V8.73719H8.64167V10.2372ZM23.6068 13.0985L23.107 15.5233L24.5762 15.8261L25.0759 13.4013L23.6068 13.0985ZM20.7724 10.2372C21.6288 10.2372 22.3825 10.2382 22.9773 10.3047C23.2729 10.3377 23.4941 10.3836 23.6495 10.4382C23.8109 10.495 23.8366 10.5385 23.8236 10.5216L25.0125 9.60697C24.7776 9.30154 24.4472 9.12864 24.1467 9.02305C23.8403 8.91536 23.4937 8.85306 23.144 8.81397C22.4482 8.73619 21.601 8.73719 20.7724 8.73719V10.2372ZM25.0769 13.3967C25.2461 12.5489 25.3898 11.8374 25.425 11.2676C25.4611 10.6814 25.3944 10.1034 25.0125 9.60697L23.8236 10.5216C23.8857 10.6023 23.9542 10.7476 23.9278 11.1752C23.9004 11.6191 23.7837 12.212 23.6059 13.1031L25.0769 13.3967ZM19.924 19.6172C20.6857 19.6172 21.3249 19.6185 21.8402 19.5554C22.3759 19.4899 22.8645 19.3465 23.291 18.999L22.3434 17.8362C22.2182 17.9382 22.0407 18.0197 21.658 18.0665C21.2548 18.1159 20.7233 18.1172 19.924 18.1172V19.6172ZM23.107 15.5233C22.9457 16.3061 22.8371 16.8265 22.7074 17.2113C22.5843 17.5767 22.4686 17.7341 22.3434 17.8362L23.291 18.999C23.7175 18.6514 23.9565 18.2018 24.1289 17.6904C24.2946 17.1984 24.4224 16.5721 24.5762 15.8261L23.107 15.5233Z" fill="#00133F"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        feed.append(card);
    });
}

