const books =	[ [ 'ISBN-10',
    'ISBN-13',
    'TITLE',
    'AUTHER',
    'Done ',
    'COVER IMAGE',
    'LANGUAGE',
    'AGE TARGET',
    'QUANTITY',
    'Publisher',
    'Call Number',
    'Genre' ],
  [ 1846651174,
    9781846651175,
    'The Hound of the Baskervilles',
    'Sir Arthur Conan Doyle',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    7,
    'Charles Baker Classic',
    'F-LIT-MYS-002',
    'Fiction > Literature > Mystery' ],
  [ 1846650755,
    9781846659758,
    'Twenty Thousand Leagues Under the Sea',
    'Jules Verne',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    4,
    'Charles Baker Classic',
    'F-LIT-ADV-003',
    'Fiction > Literature > Adventure' ],
  [ 1846650712,
    9781846650710,
    'The Invisible Man',
    'H.G. Wells',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    3,
    'Charles Baker Classic',
    'F-LIT-SF-002',
    'Fiction > Literature > Science Fiction' ],
  [ 1846650747,
    9781846650741,
    'The Adventures of Huckleberry Finn',
    'Mark Twain',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    5,
    'Charles Baker Classic',
    'F-LIT-CLA-003',
    'Fiction > Literature > Classics' ],
  [ 1846650682,
    9781846650680,
    'Heidi',
    'Johanna Spyri',
    'done',
    '',
    'English',
    'Children (8-12)',
    5,
    'Charles Baker Classic',
    'F-LIT-CHI-001',
    'Fiction > Literature > Children’s Classics' ],
  [ 1846650844,
    9781846650840,
    'Emma',
    'Jane Austen ',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    3,
    'Charles Baker Classic',
    'F-LIT-ROM-005',
    'Fiction > Literature > Romance' ],
  [ 1846650690,
    9781846650697,
    'Around the Word in Eighty Days',
    'Jules Verne',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    3,
    'Charles Baker Classic',
    'F-LIT-ADV-005',
    'Fiction > Literature > Adventure' ],
  [ 184665081,
    9781846650819,
    'Ivanhoe',
    'Sir Walter Scott',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    4,
    'Charles Baker Classic',
    'F-LIT-HIS-006',
    'Fiction > Literature > Historical Classics' ],
  [ 1846650763,
    9781846650765,
    'Kidnapped',
    'R.L. stevenson',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    5,
    'Charles Baker Classic',
    'F-LIT-ADV-006',
    'Fiction > Literature > Adventure' ],
  [ 1846650798,
    9781846650796,
    'The count of monte cristo',
    'Alexandre Dumas',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    6,
    'Charles Baker Classic',
    'F-LIT-HIS-007',
    'Fiction > Literature > Historical Classics' ],
  [ 1846650704,
    9781846650703,
    'Robinson Crusoe',
    'Daniel Defoe',
    'done',
    '',
    'English',
    'Teens to Adults (12+)',
    5,
    'Charles Baker Classic',
    'F-LIT-ADV-008',
    'Fiction > Literature > Adventure' ] ]
const headers = books[0]

const ages = ['Teens to Adults (12+)','Children (8-12)']
const languages = ['english','french']
const genres = ['fiction','literature','mystery','adventure']
// get data form

function searchBook(){
    const items = ['title','author','publisher','age','language','genre']
    const values = {}
    items.forEach(item => {
        values[item] = document.getElementById(item).value
    })

    const headerIndex = (title) => {
        return headers.findIndex(header => header.toLowerCase() ===title)
    }
    console.log(values)
    const isValue = Object.values(values).every(val => val!==''&&val!=='0')
    console.log (isValue)
    if (!isValue){
        alert('At least input title or author to search')
        document.getElementById('title').focus()
        return
    }
    var foundBooks = [...books]
    if (values.title){
        const titleColumn = headerIndex("title")
        foundBooks = foundBooks.filter(book=> book[titleColumn].toLowerCase().includes(values.title.toLowerCase()))
    }
    if (values.author){
        const authorColumn = headerIndex("author")
        foundBooks = foundBooks.filter(book=> book[authorColumn].toLowerCase().includes(values.author.toLowerCase()))
    }
    if (values.publisher){
        const publisherColumn = headerIndex("publisher")
        foundBooks = foundBooks.filter(book=> book[publisherColumn].toLowerCase().includes(values.publisher.toLowerCase()))
    }

    if (values.age!=='0'){
        const ageColumn = headerIndex("age")
        const ageValue = ages[values.age-1]
        console.log(ageValue)
        foundBooks = foundBooks.filter(book=> book[ageColumn].toLowerCase().includes(ageValue.toLowerCase()))
    }
    if (values.language!=='0'){
        const languageColumn = headerIndex("language")
        const languageValue = languages[values.language-1]
        foundBooks = foundBooks.filter(book=> book[languageColumn].toLowerCase().includes(languageValue.toLowerCase()))
    }
    if (values.genre!=='0'){
        const genreColumn = headerIndex("genre")
        const genreValue = languages[values.language-1]
        foundBooks = foundBooks.filter(book=> book[genreColumn].toLowerCase().includes(genreValue.toLowerCase()))
    }
    
    console.log(foundBooks)
    renderBooks(foundBooks)
}

const bookCoverImg = "https://media.istockphoto.com/id/183890264/photo/upright-red-book-with-clipping-path.jpg?s=612x612&w=0&k=20&c=zm6sEPnc4zK4MNj307pm3tzgxTbex2sOnb1Ip5hglaA="
function renderBooks (foundBooks=[]){
    const searchResult = document.querySelector('.search-result')
    var element = ''

    const headerIndex = (title) => {
        return headers.findIndex(header => header.toLowerCase() ===title)
    }

    if (!foundBooks.length){
        element = `<p class="infor">There is no book like you are searching for</p>`
    }else{
        foundBooks.forEach(book =>{
            const imgUrl = book[headerIndex('cover image')]?book[headerIndex('cover image')]:bookCoverImg
            element+= `
                <div class="book">
                <div><img src=${imgUrl} alt=""></div>
                <div class="book-infor">
                    <p class="name">${book[headerIndex('title')]}</p>
                    <p class="">By ${book[headerIndex('auther')]}</p>
                    <p class="">Language: ${book[headerIndex('language')]}</p>
                    <p class="">Age target:${book[headerIndex('age target')]}</p>
                    <p class="">Publisher: ${book[headerIndex('publisher')]}</p>
                    <p class="">Genre: ${book[headerIndex('genre')]}</p>
                    <p class="number">Location: ${book[headerIndex('call number')]}</p>
                </div>
            </div>
            `
        })
    }

    searchResult.innerHTML = element
}