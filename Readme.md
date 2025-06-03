Objectifs pédagogiques

1. Faire la distinction entre un algorithme de hachage et ses principes de robustesse et
un algorithme de chiffrement et les siens


Algorithme de hachage :
Transforme un message en une petite "empreinte" unique. Sert à vérifier que le message n’a pas été modifié. On ne peut pas retrouver le message d’origine à partir de l’empreinte.

Algorithme de chiffrement :
Transforme un message pour le rendre secret. Seul celui qui a la clé peut le remettre lisible. Sert à protéger la confidentialité.

2. Comprendre HMAC et son contexte d’utilisation applicatif

HMAC est un code qui utilise une clé secrète avec un algorithme de hachage pour vérifier que le message vient de la bonne personne et n’a pas été modifié.
On l’utilise souvent pour sécuriser les échanges entre deux parties, comme dans les API.

3.  Déterminer les grands principes de sécurité implémenter dans le cadre d’une application

Les principes de sécurité dans une appli sont : protéger les données (confidentialité), vérifier qu’elles ne changent pas (intégrité), s’assurer de l’identité (authentification), contrôler les accès (autorisation), et garder un suivi des actions (traçabilité).
