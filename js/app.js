const sportslist = document.querySelector('#sports');
const pollist = document.querySelector('#politics');
const litlist = document.querySelector('#lit');
const techlist = document.querySelector('#tech');

function rendersportslist(doc){
    let m_div = document.createElement('div');
    m_div.classList.add('row');
    let sec_div = document.createElement('div');
    sec_div.classList.add('col');
    sec_div.classList.add('m10');
    sec_div.classList.add('offset-m1');
    sec_div.classList.add('s12');
    let tri_div = document.createElement('div');
    tri_div.classList.add('card');
    tri_div.classList.add('z-depth-1');
    tri_div.classList.add('blog');
    let forth_div = document.createElement('div');
    forth_div.classList.add('card-content');
    let first_span = document.createElement('span');
    first_span.classList.add('card-title');
    let p_content = document.createElement('p');
    first_span.textContent = doc.data().title;
    p_content.textContent = doc.data().content;
    forth_div.appendChild(first_span);
    forth_div.appendChild(p_content);
    tri_div.appendChild(forth_div);
    sec_div.appendChild(tri_div);
    m_div.appendChild(sec_div);
    sportslist.appendChild(m_div);
}

function renderlitlist(doc){
    let m_div = document.createElement('div');
    m_div.classList.add('row');
    let sec_div = document.createElement('div');
    sec_div.classList.add('col');
    sec_div.classList.add('m10');
    sec_div.classList.add('offset-m1');
    sec_div.classList.add('s12');
    let tri_div = document.createElement('div');
    tri_div.classList.add('card');
    tri_div.classList.add('z-depth-1');
    tri_div.classList.add('blog');
    let forth_div = document.createElement('div');
    forth_div.classList.add('card-content');
    let first_span = document.createElement('span');
    first_span.classList.add('card-title');
    let p_content = document.createElement('p');
    first_span.textContent = doc.data().title;
    p_content.textContent = doc.data().content;
    forth_div.appendChild(first_span);
    forth_div.appendChild(p_content);
    tri_div.appendChild(forth_div);
    sec_div.appendChild(tri_div);
    m_div.appendChild(sec_div);
    litlist.appendChild(m_div);
}

function renderpollist(doc){
    let m_div = document.createElement('div');
    m_div.classList.add('row');
    let sec_div = document.createElement('div');
    sec_div.classList.add('col');
    sec_div.classList.add('m10');
    sec_div.classList.add('offset-m1');
    sec_div.classList.add('s12');
    let tri_div = document.createElement('div');
    tri_div.classList.add('card');
    tri_div.classList.add('z-depth-1');
    tri_div.classList.add('blog');
    let forth_div = document.createElement('div');
    forth_div.classList.add('card-content');
    let first_span = document.createElement('span');
    first_span.classList.add('card-title');
    let p_content = document.createElement('p');
    first_span.textContent = doc.data().title;
    p_content.textContent = doc.data().content;
    forth_div.appendChild(first_span);
    forth_div.appendChild(p_content);
    tri_div.appendChild(forth_div);
    sec_div.appendChild(tri_div);
    m_div.appendChild(sec_div);
    pollist.appendChild(m_div);
}

function rendertechlist(doc){
    let m_div = document.createElement('div');
    m_div.classList.add('row');
    let sec_div = document.createElement('div');
    sec_div.classList.add('col');
    sec_div.classList.add('m10');
    sec_div.classList.add('offset-m1');
    sec_div.classList.add('s12');
    let tri_div = document.createElement('div');
    tri_div.classList.add('card');
    tri_div.classList.add('z-depth-1');
    tri_div.classList.add('blog');
    let forth_div = document.createElement('div');
    forth_div.classList.add('card-content');
    let first_span = document.createElement('span');
    first_span.classList.add('card-title');
    let p_content = document.createElement('p');
    first_span.textContent = doc.data().title;
    p_content.textContent = doc.data().content;
    forth_div.appendChild(first_span);
    forth_div.appendChild(p_content);
    tri_div.appendChild(forth_div);
    sec_div.appendChild(tri_div);
    m_div.appendChild(sec_div);
    techlist.appendChild(m_div);
}

db.collection('sports').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        rendersportslist(doc);
    });
});

db.collection('lit').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderlitlist(doc);
    });
});

db.collection('politics').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderpollist(doc);
    });
});

db.collection('tech').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        rendertechlist(doc);
    });
});