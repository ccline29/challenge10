function createManagerCard(manager) {
    return `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h4><i class="bi bi-cup-hot-fill"></i> ${manager.getRole()}</h4>
        </div>
        <div class="list-container">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        </div>`
}

module.exports = createManagerCard;