// Dynamically create alphabet cards for alphabets page
if (document.getElementById('alphabetContainer')) {
    const alphabetContainer = document.getElementById('alphabetContainer');
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    alphabets.forEach(alphabet => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = alphabet;
        card.addEventListener('click', function() {
            showPopupCard(alphabet);
        });
        alphabetContainer.appendChild(card);
    });
}

// Dynamically create number buttons for numbers page
if (document.getElementById('numberContainer')) {
    const numberContainer = document.getElementById('numberContainer');

    for (let i = 1; i <= 50; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', function() {
            showPopupCard(i);
        });
        numberContainer.appendChild(button);
    }
}

function showPopupCard(content) {
    const popupCard = document.createElement('div');
    popupCard.classList.add('popup-card');

    if (typeof content === 'number') {
        const number = content;

        const h1 = document.createElement('h1');
        h1.textContent = number;
        h1.style.fontSize = '5rem';
        popupCard.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = `This is the number ${number}.`;
        popupCard.appendChild(p);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.addEventListener('click', function() {
            popupCard.style.display = 'none';
        });
        popupCard.appendChild(closeButton);

        const speakButton = document.createElement('button');
        speakButton.textContent = 'Speak';
        speakButton.addEventListener('click', function() {
            speakNumber(number);
        });
        popupCard.appendChild(speakButton);
    } else {
        const alphabet = content;

        const gif = document.createElement('img');
        gif.src = `./assets/alphabet-gif/${alphabet}.gif`;
        popupCard.appendChild(gif);

        const h2 = document.createElement('h2');
        h2.textContent = alphabet;
        popupCard.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = `This is a sentence that uses the letter ${alphabet}.`;
        popupCard.appendChild(p);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.addEventListener('click', function() {
            popupCard.style.display = 'none';
        });
        popupCard.appendChild(closeButton);

        const speakButton = document.createElement('button');
        speakButton.textContent = 'Speak';
        speakButton.addEventListener('click', function() {
            speakAlphabet(alphabet);
        });
        popupCard.appendChild(speakButton);
    }

    document.body.appendChild(popupCard);

    popupCard.style.display = 'block';
}

function speakAlphabet(alphabet) {
    const wordAudio = new Audio(`./assets/audio/alphabet/${alphabet}.wav`);
    const sentenceAudio = new Audio(`./assets/audio/${alphabet}_sentence.mp3`);

    // Play word audio
    wordAudio.play();

    // Delay sentence audio by word duration
    wordAudio.addEventListener('ended', function() {
        setTimeout(function() {
            sentenceAudio.play();
        }, 500); // Adjust delay time as needed
    });
}

function speakNumber(number) {
    const numberAudio = new Audio(`./assets/audio/numbers/${number}.wav`);
    numberAudio.play();
}

// -------------
const videos = [
    {
        name: "Wheels on the Bus",
        videoId: "CnRK9giGyBE"
    },
    {
        name: "Baa Baa Black Sheep",
        videoId: "oSNdO4E_yXo"
    },
    {
        name: "Rain Rain Go Away",
        videoId: "jGF5UjX8Ch8"
    },
    {
        name: "Hickory Dickory Dock",
        videoId: "4KuVXRJGdNI"
    },
    {
        name: "I'm a Little Teapot",
        videoId: "2hwXWmLnQUI"
    },
    {
        name: "Twinkle, Twinkle, Little Star",
        videoId: "0s1zjYvS0-8"
    },
    {
        name: "Five Little Monkeys",
        videoId: "DK_AjcFMifE"
    },
    {
        name: "Old MacDonald Had a Farm",
        videoId: "vEmBeIQVIgs"
    },
    {
        name: "Johnny Johnny Yes Papa",
        videoId: "3PIowHQPe-I"
    },
    {
        name: "Itsy Bitsy Spider",
        videoId: "9c8mV4g7JUk"
    },
    // Add more nursery rhymes as needed
];

function createVideoListItem(video) {
    const listItem = document.createElement("li");
    listItem.classList.add("video-list-item");

    const listLink = document.createElement("a");
    listLink.textContent = video.name;
    listLink.href = "#";
    listLink.dataset.videoId = video.videoId;
    listLink.addEventListener("click", (event) => {
        event.preventDefault();
        openPopup(video.videoId);
    });

    listItem.appendChild(listLink);

    return listItem;
}

function openPopup(videoId) {
    const popup = document.getElementById("popup");
    const videoFrame = document.getElementById("video-frame");
    const closeButton = document.getElementById("close-button");

    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    popup.style.display = "block";

    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
        videoFrame.src = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const videoList = document.getElementById("videoList");

    videos.forEach((video) => {
        const listItem = createVideoListItem(video);
        videoList.appendChild(listItem);
    });
});