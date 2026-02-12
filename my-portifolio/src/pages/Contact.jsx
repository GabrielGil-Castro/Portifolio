import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "gildecastro.g@gmail.com",
      link: "mailto:gabriel.gil@exemplo.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      info: "RJ - Brasil",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/GabrielGil-Castro",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/gabriel",
      color: "hover:text-blue-400"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simular envio do formulário
    try {
      // Aqui você pode integrar com um serviço como EmailJS, Formspree, etc.
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula delay da API
      
      // Simular sucesso (você deve implementar a lógica real aqui)
      console.log('Dados do formulário:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Remover status após 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-tr from-slate-100 via-slate-200 to-cyan-100 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4">
            Entre em <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-slate-800/80 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800/80 mb-6">
                Vamos trabalhar juntos!
              </h3>
              <p className="text-slate-800/80 text-lg leading-relaxed mb-8">
                Estou sempre aberto a discutir novas oportunidades, projetos interessantes 
                ou apenas bater um papo sobre tecnologia. Não hesite em entrar em contato!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300">
                  <div className="text-cyan-400 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-800/80 font-semibold">{contact.title}</h4>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-slate-700 hover:text-blue-400 transition-colors"
                      >
                        {contact.info}
                      </a>
                    ) : (
                      <p className="text-slate-700">{contact.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-slate-800/80 font-semibold mb-4">Me siga nas redes:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-700/20 rounded-2xl p-8 border border-slate-600/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-800/80 font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/20 border border-slate-600 rounded-lg text-slate-800/80 placeholder-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-800/80 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/20 border border-slate-600 rounded-lg text-white placeholder-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-slate-800/80 font-medium mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/20 border border-slate-600 rounded-lg text-slate-800/80 placeholder-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Assunto da mensagem"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-slate-800/80 font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/20 border border-slate-600 rounded-lg text-slate-800/80 placeholder-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto ou como posso ajudar..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-purple-500/80 disabled:from-slate-600 disabled:to-slate-600 text-slate-800/80 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-800/80/30 border-t-slate-800/80 rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                  <CheckCircle size={20} />
                  <span>Mensagem enviada com sucesso! Retornarei em breve.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                  <AlertCircle size={20} />
                  <span>Erro ao enviar mensagem. Tente novamente ou use o email diretamente.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-slate-700">
          <h3 className="text-2xl font-semibold text-slate-800/80 mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-slate-800/80 mb-6 max-w-2xl mx-auto">
            Seja um site, aplicativo ou solução personalizada, estou aqui para ajudar 
            a transformar suas ideias em realidade digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gabriel.gil@exemplo.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={18} />
              Enviar Email
            </a>
            <a
              href="/cv-gabriel-gil.pdf"
              download="Gabriel_Gil_CV.pdf"
              className="inline-flex items-center gap-2 border border-slate-600 text-slate-800/70 hover:text-white hover:border-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-700"
            >
              Baixar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;