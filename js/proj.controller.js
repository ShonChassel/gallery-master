'use strict'

function initPage() {
    renderProjects()
}


function renderProjects() {
    var projs = getProjects()
    var strHTML = projs.map(proj => {
        return `
         <div class="col-md-4 col-sm-6 portfolio-item">
         <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
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



function renderModal(projId) {
    // document.getElementById("page-top").classList.add('modal-open')
    console.group('renderModal')
    console.log(projId)


    var proj = getProjById(projId)

    console.log('proj', proj)
    var strHTML = `
    <div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="close-modal" data-dismiss="modal">
    <div class="lr">
    <div class="rl"></div>
    </div>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-lg-8 mx-auto">
    <div class="modal-body">
    <!-- Project Details Go Here -->
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.name}.PNG" alt="">
    <p>${proj.desc}!</p>
    <ul class="list-inline">
    <li>Date: ${proj.publishedAt}</li>
    <li>Client: Everyone</li>
    <li>Category: Game</li>
    </ul>
    <button class="badge btn bg-dark"><a href="${proj.url}" class="badge btn bg-dark">Lets Play</a></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
    document.querySelector('.modal-container').innerHTML = strHTML
    console.groupEnd()

}