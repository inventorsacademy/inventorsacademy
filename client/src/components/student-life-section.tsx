import { MapPin, Users, Utensils } from "lucide-react";

export default function StudentLifeSection() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Workshop Sessions"
    },
    {
      url: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Historic Setting"
    },
    {
      url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Outdoor Projects"
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Study Time"
    },
    {
      url: "https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Presentations"
    },
    {
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "Collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "College Life"
    },
    {
      url: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      caption: "City Tours"
    }
  ];

  const activities = [
    {
      icon: MapPin,
      title: "Cultural Excursions",
      description: "Visit museums, historic sites, and experience British culture",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: Users,
      title: "Social Activities",
      description: "Evening entertainment, games, and friendship building",
      color: "from-green-50 to-green-100",
      iconColor: "text-academy-green"
    },
    {
      icon: Utensils,
      title: "Dining Experience",
      description: "Meals in historic dining halls with international cuisine",
      color: "from-orange-50 to-orange-100",
      iconColor: "text-academy-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="student-life-title">
            Student Life at Oxford
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="student-life-description">
            Experience the perfect balance of intensive learning, cultural exploration, and social activities in one of the world's most beautiful university cities.
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12" data-testid="student-life-gallery">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-cover bg-center rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              style={{ backgroundImage: `url('${image.url}')` }}
              data-testid={`gallery-image-${index}`}
            >
              <div className="w-full h-full bg-black/30 rounded-xl flex items-end p-4 group-hover:bg-black/50 transition-colors">
                <span className="text-white font-semibold text-sm" data-testid={`gallery-caption-${index}`}>
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div 
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${activity.color} rounded-2xl`}
                data-testid={`activity-card-${index}`}
              >
                <Icon className={`w-12 h-12 ${activity.iconColor} mb-4 mx-auto`} />
                <h3 className="font-semibold text-academy-green mb-2" data-testid={`activity-title-${index}`}>
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-600" data-testid={`activity-description-${index}`}>
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
