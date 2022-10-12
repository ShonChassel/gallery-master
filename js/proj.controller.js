'use strict'

function initPage(){
    renderProjects()
}


function renderProjects() {
    var projs = getProjects()
    var strHTML = projs.map(proj => {
        return `
         <div class="col-md-4 col-sm-6 portfolio-item">
         <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="renderModal('${proj.id}')">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
       </div>
       </div>
      <img class="img-fluid" src="img/portfolio/${proj.name}.PNG" alt="">
      </a>
      <div class="portfolio-caption">
      <h4>${proj.name}</h4>
       <p class="text-muted">Illustration</p>
      </div>
      </div>`
    })
    document.querySelector('.photos-container').innerHTML = strHTML.join('')
}