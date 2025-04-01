// 네비게이션 활성화
document.addEventListener('DOMContentLoaded', function() {
  // 현재 페이지 URL 가져오기
  const currentPage = window.location.pathname.split('/').pop();
  
  // 네비게이션 링크 가져오기
  const navLinks = document.querySelectorAll('nav ul li a');
  
  // 현재 페이지에 해당하는 링크에 active 클래스 추가
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html') || 
        (currentPage === '/' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 테이블 반응형 처리
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // 목차 생성
  createTableOfContents();
});

// 목차 생성 함수
function createTableOfContents() {
  const mainContent = document.querySelector('main');
  if (!mainContent) return;
  
  const headings = mainContent.querySelectorAll('h2, h3');
  if (headings.length < 3) return; // 제목이 충분히 많지 않으면 목차 생성 안함
  
  const tocDiv = document.createElement('div');
  tocDiv.className = 'table-of-contents card';
  
  const tocTitle = document.createElement('h3');
  tocTitle.textContent = '목차';
  tocDiv.appendChild(tocTitle);
  
  const tocList = document.createElement('ul');
  
  headings.forEach((heading, index) => {
    // 각 제목에 ID 부여
    const headingId = `heading-${index}`;
    heading.id = headingId;
    
    // 목차 항목 생성
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${headingId}`;
    link.textContent = heading.textContent;
    
    // h3는 들여쓰기
    if (heading.tagName === 'H3') {
      listItem.style.marginLeft = '1.5rem';
    }
    
    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });
  
  tocDiv.appendChild(tocList);
  
  // 첫 번째 제목 앞에 목차 삽입
  const firstHeading = mainContent.querySelector('h1, h2, h3, h4, h5, h6');
  if (firstHeading) {
    mainContent.insertBefore(tocDiv, firstHeading);
  } else {
    mainContent.prepend(tocDiv);
  }
}

// 테이블 정렬 기능
function sortTable(tableId, columnIndex) {
  const table = document.getElementById(tableId);
  if (!table) return;
  
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  // 정렬 방향 결정 (현재 정렬의 반대)
  const currentDirection = table.getAttribute('data-sort-direction') === 'asc' ? 'desc' : 'asc';
  table.setAttribute('data-sort-direction', currentDirection);
  
  // 행 정렬
  rows.sort((a, b) => {
    const cellA = a.querySelectorAll('td')[columnIndex].textContent.trim();
    const cellB = b.querySelectorAll('td')[columnIndex].textContent.trim();
    
    if (currentDirection === 'asc') {
      return cellA.localeCompare(cellB);
    } else {
      return cellB.localeCompare(cellA);
    }
  });
  
  // 정렬된 행 다시 삽입
  rows.forEach(row => tbody.appendChild(row));
}

// 검색 기능
function searchTable(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  if (!input || !table) return;
  
  const filter = input.value.toUpperCase();
  const rows = table.querySelectorAll('tbody tr');
  
  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    let found = false;
    
    cells.forEach(cell => {
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        found = true;
      }
    });
    
    row.style.display = found ? '' : 'none';
  });
}

// 탭 기능
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }
  
  const tabLinks = document.getElementsByClassName('tab');
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }
  
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// 스크롤 시 헤더 고정
window.onscroll = function() {
  const header = document.querySelector('header');
  if (window.pageYOffset > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

// 페이지 맨 위로 스크롤 버튼
window.onload = function() {
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'scroll-top-btn';
  scrollBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  
  document.body.appendChild(scrollBtn);
  
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };
};
