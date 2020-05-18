var starWarsPeopleList = document.querySelector("ul");

fetch("https://swapi.co/api/people")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let people = json.result;

        for(p of people) {
            let listItem = document.createElement("li");
            listItem.innerHTML = "<p>" + p.name + "</p>";
            starWarsPeopleList.append(listItem);
        }

    });

