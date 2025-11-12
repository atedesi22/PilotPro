// src/components/SuperAdminMessages.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaTrash, FaArrowLeft, FaEnvelope } from 'react-icons/fa';

// --- Configuration Couleurs & Styles ---
const colors = {
    'pilotpro-blue': '#34495E',
    'success-green': '#A2E0D4',
    'alert-orange': '#F7A384',
    'text-deep-grey': '#4A4A4A',
    'background-alt': '#F5F7F9',
    'border-grey': '#DDE6ED',
};

// Clé de stockage (doit correspondre à celle de ContactPage)
const STORAGE_KEY = 'pilotpro_contact_messages';

const SuperAdminMessages = () => {
    // État local pour stocker les messages récupérés
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    // Fonction pour récupérer les messages depuis le localStorage
    const loadMessages = useCallback(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            const loadedMessages = stored ? JSON.parse(stored) : [];
            // Assurer que les messages sont triés du plus récent au plus ancien (basé sur l'ID timestamp)
            setMessages(loadedMessages.sort((a, b) => b.id - a.id));
        } catch (error) {
            console.error("Erreur de chargement du localStorage:", error);
            setMessages([]);
        }
    }, []);

    // Charger les messages au montage du composant
    useEffect(() => {
        loadMessages();
    }, [loadMessages]);

    // Fonction pour mettre à jour le localStorage après modification de l'état
    const updateLocalStorage = (newMessages) => {
        setMessages(newMessages);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newMessages));
        } catch (error) {
            console.error("Erreur de sauvegarde du localStorage:", error);
        }
    };

    // Basculer l'état "lu/non-lu"
    const toggleReadStatus = (id) => {
        const newMessages = messages.map(msg => 
            msg.id === id ? { ...msg, read: !msg.read } : msg
        );
        updateLocalStorage(newMessages);
        
        // Mettre à jour la lecture du message sélectionné s'il est affiché
        if (selectedMessage && selectedMessage.id === id) {
            setSelectedMessage(newMessages.find(msg => msg.id === id));
        }
    };

    // Supprimer un message
    const deleteMessage = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce message ?")) {
            const newMessages = messages.filter(msg => msg.id !== id);
            updateLocalStorage(newMessages);
            if (selectedMessage && selectedMessage.id === id) {
                setSelectedMessage(null);
            }
        }
    };
    
    // Afficher les détails du message
    const viewMessageDetails = (message) => {
        setSelectedMessage(message);
        if (!message.read) {
            toggleReadStatus(message.id);
        }
    };

    // Compteurs
    const unreadCount = messages.filter(msg => !msg.read).length;

    if (selectedMessage) {
        return (
            <div className="min-h-screen bg-background-alt p-8 font-sans">
                <button 
                    onClick={() => setSelectedMessage(null)} 
                    className="flex items-center text-pilotpro-blue hover:text-pilotpro-blue/80 mb-6 font-semibold"
                >
                    <FaArrowLeft className="mr-2" /> Retour à la liste
                </button>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-border-grey">
                    <div className="flex justify-between items-start border-b pb-4 mb-4">
                        <div>
                            <h1 className="text-2xl font-bold text-text-deep-grey">{selectedMessage.subject}</h1>
                            <p className="text-sm text-text-deep-grey/70">De: <span className="font-medium text-pilotpro-blue">{selectedMessage.name}</span> ({selectedMessage.email})</p>
                        </div>
                        <div className="text-right">
                             <p className="text-xs text-text-deep-grey/60 mb-2">{selectedMessage.date}</p>
                             <button 
                                onClick={() => deleteMessage(selectedMessage.id)} 
                                className="text-alert-orange hover:text-alert-orange/80 p-2 text-xl"
                                title="Supprimer"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    <p className="whitespace-pre-wrap text-text-deep-grey leading-relaxed">
                        {selectedMessage.message}
                    </p>
                    <div className="mt-6 pt-4 border-t flex justify-end">
                         <a href={`mailto:${selectedMessage.email}?subject=Re:${selectedMessage.subject}`} 
                           className="flex items-center px-4 py-2 bg-success-green text-pilotpro-blue rounded-md font-semibold hover:opacity-80 transition-opacity"
                        >
                            <FaEnvelope className="mr-2" /> Répondre
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    
    // Vue Liste des messages
    return (
        <div className="min-h-screen bg-background-alt p-4 md:p-8 font-sans">
            <header className="flex justify-between items-center mb-6 border-b border-border-grey pb-4">
                <h1 className="text-3xl font-bold text-pilotpro-blue">
                    Super Admin - Messages de Contact
                </h1>
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-semibold text-text-deep-grey">
                        {unreadCount} Nouveaux messages
                    </span>
                    <button 
                        onClick={loadMessages}
                        className="p-2 bg-pilotpro-blue text-white rounded-full text-xs"
                    >
                        Actualiser
                    </button>
                </div>
            </header>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {messages.length === 0 ? (
                    <p className="p-8 text-center text-text-deep-grey/70">
                        Aucun message de contact n'a été enregistré dans ce navigateur.
                    </p>
                ) : (
                    <table className="min-w-full divide-y divide-border-grey">
                        <thead>
                            <tr className="bg-background-alt text-xs font-medium text-text-deep-grey uppercase tracking-wider text-left">
                                <th className="py-3 px-4">Statut</th>
                                <th className="py-3 px-4">Sujet</th>
                                <th className="py-3 px-4">De</th>
                                <th className="py-3 px-4">Date</th>
                                <th className="py-3 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-grey">
                            {messages.map((msg) => (
                                <tr key={msg.id} className={`hover:bg-background-alt/50 transition-colors cursor-pointer ${!msg.read ? 'bg-success-green/10 font-semibold' : ''}`}>
                                    <td className="py-3 px-4">
                                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${msg.read ? 'bg-border-grey text-text-deep-grey' : 'bg-success-green text-pilotpro-blue'}`}>
                                            {msg.read ? 'Lu' : 'Nouveau'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4" onClick={() => viewMessageDetails(msg)}>
                                        {msg.subject}
                                    </td>
                                    <td className="py-3 px-4" onClick={() => viewMessageDetails(msg)}>
                                        {msg.name}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-text-deep-grey/70" onClick={() => viewMessageDetails(msg)}>
                                        {msg.date}
                                    </td>
                                    <td className="py-3 px-4 flex justify-center space-x-2">
                                        <button 
                                            onClick={() => toggleReadStatus(msg.id)}
                                            className="text-pilotpro-blue hover:text-pilotpro-blue/80 p-1 text-lg"
                                            title={msg.read ? "Marquer comme non-lu" : "Marquer comme lu"}
                                        >
                                            {msg.read ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                        <button 
                                            onClick={() => deleteMessage(msg.id)} 
                                            className="text-alert-orange hover:text-alert-orange/80 p-1 text-lg"
                                            title="Supprimer"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            
            <p className="text-center text-xs text-alert-orange mt-8">
                ⚠️ **Avertissement :** Cette interface est basée sur le **stockage local (localStorage)** de votre navigateur. Les données seront perdues si vous videz le cache ou si vous changez de navigateur/appareil. Ce n'est pas une base de données réelle.
            </p>
        </div>
    );
};

export default SuperAdminMessages;