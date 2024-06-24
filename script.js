document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const data = [
        {
            img: "images/Homecoming.jfif",
            title: "The Second Homecoming",
            description: "Jose Rizal's second homecoming to the Philippines on June 26, 1892, was a pivotal moment in his life and the Philippine reform movement. Arriving from Hong Kong aboard the steamer ''Don Juan'', Rizal returned with a strong resolve to continue his advocacy for social and economic reforms. His return was motivated by a desire to engage more directly with the Filipino people and to inspire a unified effort towards achieving meaningful change under Spanish colonial rule. This homecoming was characterized by heightened vigilance from Spanish authorities, who were wary of Rizal's influence and the potential impact of his reformist ideas."
        },
        {
            img: "images/La liga.jfif",
            title: "La Liga Filipina",
            description: "On July 3, 1892, Jose Rizal presented the concept of La Liga Filipina during a meeting at the house of Doroteo Ongjunco in Tondo, Manila. In a room filled with prominent Filipino reformists, including Andres Bonifacio and Apolinario Mabini, Rizal passionately articulated his vision for the organization. He outlined its objectives, emphasizing mutual protection, the defense against injustice, and the promotion of education and social reforms. Rizal's presentation was compelling and well-received, inspiring a sense of unity and purpose among the attendees. The formation of La Liga Filipina symbolized a collective commitment to peaceful and progressive change, reflecting Rizal's unwavering dedication to the betterment of his country."
        },
        {
            img: "images/Meeting.jfif",
            title: "Founding Meeting",
            description: "On July 3, 1892, Jose Rizal convened the founding meeting of La Liga Filipina at the house of Doroteo Ongjunco in Tondo, Manila. The meeting was attended by notable Filipino reformists, including Andres Bonifacio, Apolinario Mabini, and others who shared Rizal's vision of uniting Filipinos for social and economic reforms. During the meeting, Rizal outlined the objectives of La Liga Filipina, which included mutual protection in times of need, defense against violence and injustice, and fostering education and reforms. The attendees agreed on the importance of the league's goals and expressed their commitment to its mission, setting the foundation for a collective effort towards peaceful reform in the Philippines."
        },
        {
            img: "images/Planning.jfif",
            title: "The Planning",
            description: "Timoteo Paez emphasized the importance of agriculture and the condition of the farmers. He stated that farmers are the ones who feed the nation and must be supported. He advocated for activities that would increase productivity in agriculture to improve their situation and elevate this crucial sector, which is a vital part of the Philippine economy."
        },
        {
            img: "images/Pledge.jfif",
            title: "The Pledge",
            description: "During the inaugural meeting of La Liga Filipina on July 3, 1892, the members took an oath of commitment to the organization's principles and objectives. In the house of Doroteo Ongjunco in Tondo, Manila, Jose Rizal and the other attendees pledged their allegiance to the league's mission of mutual protection, defense against injustice, and the promotion of education and social reforms. This solemn oath symbolized their collective dedication to peaceful and progressive change in the Philippines, uniting them in their resolve to work towards the betterment of their country under the oppressive Spanish colonial rule."
        },
        {
            img: "images/Arrest.jpg",
            title: "Arrest of Rizal",
            description: "Three days after the founding of La Liga Filipina, on July 6, 1892, Jose Rizal was arrested by the Spanish authorities. The arrest took place under orders from Governor-General Eulogio Despujol. Rizal was accused of promoting subversive ideas through his writings and the newly established organization. The Spanish colonial government viewed La Liga Filipina as a threat to their rule, suspecting it of fostering revolutionary sentiments. Rizal's arrest was abrupt and marked by a lack of due process, reflecting the colonial regime's determination to suppress any form of dissent. He was subsequently exiled to Dapitan in Mindanao, where he would spend the next four years in a forced residency."
        }
    ];

    const mainImage = document.getElementById('mainImage');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');
    const thumbnails = document.querySelectorAll('.thumbnail');

    function updateMainContent(index) {
        mainImage.src = data[index].img;
        heroTitle.textContent = data[index].title;
        heroDescription.textContent = data[index].description;
        thumbnails.forEach((thumbnail, i) => {
            if (i === index) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % data.length;
        updateMainContent(currentIndex);
    }

    setInterval(showNextImage, 5000);

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateMainContent(currentIndex);
        });
    });

    // Initialize the first image and highlight the first thumbnail
    updateMainContent(currentIndex);
});