<template>
  <div class="news-container">
    <!-- Main Featured Article -->
    <div class="featured-article">
      <img class="featured-image" src="https://via.placeholder.com/600x300" alt="Featured Event" />
      <div class="featured-content">
        <p class="date">Wed, 11 August 2023 - 20:30</p>
        <h2 class="title">Insights: Graduation 2021 and beauty of software talk by prof. Bertrand Meyer</h2>
      </div>
      <p class="description">
        On March 10, we acknowledged and celebrated the graduation of SIT’s first generation of students,
        learned more about the opportunities at SIT from its founder Serg Bell and debated the concept of beauty
        in software with provost Bertrand Meyer.
      </p>
    </div>

    <!-- Side List of Articles -->
    <div class="article-list">
      <div v-for="(article, index) in articles" :key="index" class="article-item">
        <div class="article-content">
          <p class="date">{{ article.date }}</p>
          <h4 class="title">{{ article.title }}</h4>
        </div>
        <div class="article-image">
          <img :src="article.image" alt="Event Image" />
        </div>
      </div>
      <p class="find-more">Find more &gt;</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          date: "Wed, 11 August 2023 - 20:30",
          title: "SIT Attends Cybersecurity Event by Acronis",
          image: "https://via.placeholder.com/150",
        },
        {
          date: "Wed, 11 August 2023 - 20:30",
          title: "SIT Attends Cybersecurity Event by Acronis",
          image: "https://via.placeholder.com/150",
        },
        {
          date: "Wed, 11 August 2023 - 20:30",
          title: "SIT Attends Cybersecurity Event by Acronis",
          image: "https://via.placeholder.com/150",
        },
        {
          date: "Wed, 11 August 2023 - 20:30",
          title: "SIT Attends Cybersecurity Event by Acronis",
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Main Container */
.news-container {
  display: flex;
  gap: 20px;
  margin: 20px;
}

/* Featured Article Section */
.featured-article {
  flex: 3;
}

.featured-image {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.featured-content {
  margin-top: 10px;
}

.date {
  font-size: 14px;
  color: #888;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
}

.description {
  margin-top: 10px;
  color: #555;
  font-size: 16px;
}

/* Side Article List Section */
.article-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.article-item {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article-content {
  flex: 1;
  margin-right: 10px;
}

.article-image img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.find-more {
  text-align: right;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
}
</style>
