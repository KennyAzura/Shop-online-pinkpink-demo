const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const productSell = $('.home-product__add')
const actionLike = $('.home-product-item__action-like--liked')
const categoryItem = $('.category-item')
const contactLink = $('.header__contact-link h2')
const contactLinkPhone = $('.header__contact-link h3')
const nameLogo1 = $('.header__logo-name-1')
const nameLogo2 = $('.header__logo-name-2')


const appProduct = {
    currentIndex: 0,
    isLiked: false,
    products: [{
            id: 1,
            name: 'Bánh bi màu',
            image: './assets/img/banhbimau.jpg',
            priceOld: '800.000đ',
            priceCurrent: '200.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 2,
            name: 'Bánh cá',
            image: './assets/img/banhca.jpg',
            priceOld: '800.000đ',
            priceCurrent: '400.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 3,
            name: 'Chè Khúc bạch',
            image: './assets/img/chekhucbach.jpg',
            priceOld: '800.000đ',
            priceCurrent: '100.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 4,
            name: 'Combo chè',
            image: './assets/img/comboche.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 5,
            name: 'Bánh đồng tiền',
            image: './assets/img/banhdongtien.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 6,
            name: 'Bánh đồng tiền hạt',
            image: './assets/img/banhdongtienhat.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 7,
            name: 'Bánh dừa sữa',
            image: './assets/img/banhduasua.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 8,
            name: 'Bánh đuông sữa',
            image: './assets/img/banhduongsua.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 9,
            name: 'Bánh đuông sữa màu',
            image: './assets/img/banhduongsuamau.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 10,
            name: 'Bánh gai bơ',
            image: './assets/img/banhgaibo.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 11,
            name: 'Bánh gai màu',
            image: './assets/img/banhgaimau.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 12,
            name: 'Bánh gấu',
            image: './assets/img/banhgauduloai.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 13,
            name: 'Bánh gấu nâu',
            image: './assets/img/banhgaunau.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 14,
            name: 'Bánh gấu xanh',
            image: './assets/img/banhgauxanh.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 15,
            name: 'Bánh măng sữa',
            image: './assets/img/banhmangsua.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 16,
            name: 'Bánh nhện mè',
            image: './assets/img/comboche.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 17,
            name: 'Bánh quy tròn',
            image: './assets/img/banhquytron.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 18,
            name: 'Bánh tai cùi',
            image: './assets/img/banhtaicui.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 19,
            name: 'Bánh tai heo mắm',
            image: './assets/img/banhtaiheomam.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 20,
            name: 'Bánh tai heo mè',
            image: './assets/img/banhtaiheome.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 21,
            name: 'Bánh tai heo nhí truyền thống',
            image: './assets/img/banhtaiheonhitruyenthong.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 22,
            name: 'Bánh tai heo nhí trà xanh',
            image: './assets/img/banhtaiheonhitraxanh.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 23,
            name: 'Bánh tai heon nhí trà xanh truyền thống',
            image: './assets/img/banhtaiheonhitraxanhtruyenthong.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 24,
            name: 'Bánh bim bim đậu Hà Lan',
            image: './assets/img/bimbimdauhala.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 25,
            name: 'Chè ba màu',
            image: './assets/img/chebamau.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 26,
            name: 'Chè bưởi đậu xanh',
            image: './assets/img/chebuoidauxanh.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 27,
            name: 'Chè khúc bạch',
            image: './assets/img/chekhucbach.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 28,
            name: 'Combo bánh tráng me',
            image: './assets/img/combobanhtrangme.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'RicePaper',
        },
        {
            id: 29,
            name: 'Combo sâm bổ lượng',
            image: './assets/img/combosamboluong.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 30,
            name: 'Con nuôi sấy',
            image: './assets/img/connuoisay.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 31,
            name: 'Con nuôi sấy lá chanh',
            image: './assets/img/connuoisaylachanh.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Cake',
        },
        {
            id: 32,
            name: 'Hành phi',
            image: './assets/img/hanhphi.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'RicePaper',
        },
        {
            id: 33,
            name: 'Kẹo sỏi',
            image: './assets/img/keosoi.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Candy',
        },
        {
            id: 34,
            name: 'Muối chay Tây Nnh',
            image: './assets/img/muoichay.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Salt',
        },
        {
            id: 35,
            name: 'Muối ớt Tôm Tây Ninh',
            image: './assets/img/muoiottom.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Salt',
        },
        {
            id: 36,
            name: 'Muối ớt xanh Tây Ninh',
            image: './assets/img/muoiotxanh.png',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Salt',
        },
        {
            id: 37,
            name: 'Muối tôm nhuyễn Tây Ninh',
            image: './assets/img/muoitomnhuyen.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Salt',
        },
        {
            id: 38,
            name: 'Sâm bổ lượng',
            image: './assets/img/samboluong.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 39,
            name: 'Sương sáo hạt chia',
            image: './assets/img/suongsaohatchia.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 40,
            name: 'Tàu hủ trân châu đường đen',
            image: './assets/img/tauhutranchauduongden.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'Tea',
        },
        {
            id: 41,
            name: 'Trà sữa Phúc Long',
            image: './assets/img/trasuaphuclong.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'MilkTea',
        },
        {
            id: 42,
            name: 'Combo trà sữa Phúc Long và trân châu đường đen',
            image: './assets/img/trasuaphuclongvatranchauduongden.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'MilkTea',
        },
        {
            id: 43,
            name: 'Combo trà sữa Thái đỏ Thái xanh ',
            image: './assets/img/trasuathaidovathaixanh.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'MilkTea',
        },
        {
            id: 44,
            name: 'Trà sữa Thái đỏ',
            image: './assets/img/trasuathaido.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'MilkTea',
        },
        {
            id: 45,
            name: 'Trà sữa Thái xanh',
            image: './assets/img/trasuathaixanh.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'MilkTea',
        },
        {
            id: 46,
            name: 'Trà sữa trân châu đường đen',
            image: './assets/img/trasuatranchauduongden.jpg',
            priceOld: '800.000đ',
            priceCurrent: '300.000đ',
            sold: '88 đã bán',
            brand: 'Whoo',
            origin: 'Nhật Bản',
            saleOffPercent: '43%',
            saleOffLable: 'Giảm',
            typeof: 'MilkTea',
        },
    ],

    loadCurrentProduct() {
        const imageProduct = $('.home-product-item__img')
        const nameProduct = $('.home-product-item__name')
        const priceOldProduct = $('.home-product-item__price-old')
        const priceCurrentProduct = $('.home-product-item__price-current')
        const soldProduct = $('.home-product-item__sold')
        const brandProduct = $('.home-product-item__brand')
        const originNameProduct = $('.home-product-item__origin-name')
        const saleOffPercentProduct = $('.home-product-item__sale-off-percent')
        const saleOffLableProduct = $('.home-product-item__sale-off-lable')

        imageProduct.style.backgroundImage = `url(${this.currentProduct.image})`
        nameProduct.textContent = this.currentProduct.name
        priceOldProduct.textContent = this.currentProduct.priceOld
        priceCurrentProduct.textContent = this.currentProduct.priceCurrent
        soldProduct.textContent = this.currentProduct.sold
        brandProduct.textContent = this.currentProduct.brand
        originNameProduct.textContent = this.currentProduct.origin
        saleOffPercentProduct.textContent = this.currentProduct.saleOffPercent
        saleOffLableProduct.textContent = this.currentProduct.saleOffLable
    },

    defineProperties() {
        Object.defineProperty(this, 'currentProduct', {
            get() {
                return this.products[this.currentIndex]
            }
        })
    },

    quantityProductsDefault() {
        let products = this.products
        let items = $('.home-product__add').children;
        for (let i = 0; i < items.length; i++) {
            for (let z = 0; z < products.length; z++) {
                if (products[i].id > 10) {}
            }
        }
    },

    handleEvent() {

        _this = this
        let categoryList = $('.category-list').children;
        let items = $('.home-product__add').children;
        let btnType = $('.home-filter__btn-list').children;

        for (let i = 0; i < categoryList.length; i++) {
            categoryList[i].onclick = function(e) {
                e.preventDefault()
                for (let x = 0; x < categoryList.length; x++) {
                    categoryList[x].classList.remove('category-item--active');
                }
                this.classList.add('category-item--active');

                const displayItem = this.getAttribute('data-filter');
                for (let z = 0; z < items.length; z++) {
                    items[z].style.transform = 'scale(0)';
                    setTimeout(() => {
                        items[z].style.display = 'none'
                    }, 500)

                    if ((items[z].getAttribute('data-category') === displayItem) || displayItem === 'all') {
                        items[z].style.transform = 'scale(1)';
                        setTimeout(() => {
                            items[z].style.display = 'block'
                        }, 500)
                    }
                }
            }
        }

        // Slider
        let counter = 1;
        setInterval(function() {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 6) {
                counter = 1;
            }
        }, 4000);

        const handleScroll = () => {
            if( window.scrollY >= 700) {
                contactLink.classList.add('scrollY-change__black--active')
                contactLinkPhone.classList.add('scrollY-change__black--active')
                nameLogo1.classList.add('scrollY-change__black--active')
                nameLogo2.classList.add('scrollY-change__black--active')
            } else {
                contactLink.classList.remove('scrollY-change__black--active')
                contactLinkPhone.classList.remove('scrollY-change__black--active')
                nameLogo1.classList.remove('scrollY-change__black--active')
                nameLogo2.classList.remove('scrollY-change__black--active')
            }
        }
        
        window.addEventListener('scroll', handleScroll)
    },

    render() {
        const htmls = this.products.map((product, index) =>
            `<div id="${product.id}" data-category="${product.typeof}" data-price="${product.priceCurrent}" class="grid__column-2-4">
                <div class="home-product-item">

                    <div class="home-product-item__img" style="background-image: url('${product.image}')"></div>
                    <h4 class="home-product-item__name">${product.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${product.priceOld}</span>
                        <span class="home-product-item__price-current">${product.priceCurrent}</span>
                    </div>
        
                    <div class="home-product-item__action">
                        <span class="home-product-item__action-like home-product-item__action-like--liked">
                            <i class="home-product-item__action-like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__action-like-icon-fill fas fa-heart"></i>
                        </span>
                        <div class="home-product-item__action-rating">
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">${product.sold}</span>
                    </div>      
        
                    <div class="home-product-item__origin">
                        <div class="home-product-item__brand">${product.brand}</div>
                        <div class="home-product-item__origin-name">${product.origin}</div>
                    </div>
        
                    <div class="home-product-item__favourite">
                        <i class="fas fa-check"></i>
                        <span> Yêu thích</span>
                    </div>      
        
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${product.saleOffPercent}</span>
                        <span class="home-product-item__sale-off-lable">${product.saleOffLable}</span>
                    </div>
                </div>
            </div>`
        )
        productSell.innerHTML = htmls.join('')
    },

    start() {
        this.defineProperties()
        this.quantityProductsDefault()
        this.handleEvent()
        this.loadCurrentProduct()
        this.render()
    }
};


appProduct.start();