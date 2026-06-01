import { StyleSheet } from 'react-native';

export const COLORS = {
  background: '#260101',
  backgroundTicket: '#1a1a1a',
  primary: '#730202',
  text: '#FFFFF3',
  accent: '#D1A973',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
  },

  headerTitle: {
    color: COLORS.accent,
    fontSize: 18,
    fontWeight: 'bold',
  },

  logo: {
    width: 180,
    height: 90,
    resizeMode: 'contain',
  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontFamily: 'Cinzel_400Regular',
    color: COLORS.accent,
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 16,
  },

  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: COLORS.text,
    opacity: 0.85,
    textAlign: 'center',
  },

  button: {
    marginTop: 20,
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 15,
    textAlign: 'center',
  },

  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    color: COLORS.background,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  hero: {
    width: '100%',
    minHeight: 750,
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  heroText: {
    fontFamily: 'Cinzel_400Regular',
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  heroHighlight: {
    fontFamily: 'Cinzel_400Regular',
    fontSize: 60,
    color: COLORS.accent,
    textAlign: 'center',
  },

  section: {
    backgroundColor: COLORS.background,
    paddingTop: 80,
    alignItems: 'center',
    minHeight: 500,
  },

  cards: {
    position: 'absolute',
    top: -250,
    width: 500,
    height: 500,
  },

  sectionText: {
    color: COLORS.text,
    marginHorizontal: 50,
    marginVertical: 100,
    textAlign: 'center',
  },

  magicImage: {
    width: '100%',
    height: 500,
  },

  detailsContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },

  detailsTitle: {
    fontFamily: 'Cinzel_400Regular',
    fontSize: 26,
    color: COLORS.accent,
    marginBottom: 10,
  },

  detailsText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: COLORS.text,
    textAlign: 'center',
    margin: 50,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.accent,
    marginHorizontal: 40,
    marginVertical: 20,
  },

  footer: {
    textAlign: 'center',
    color: COLORS.text,
    opacity: 0.6,
    marginBottom: 30,
  },

  theaterImage: {
    width: '100%',
    height: 280,
  },

  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'flex-start',
    gap: 8,
  },

  infoText: {
    color: COLORS.text,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    flex: 1,
  },

  // ABA AGENDA
  countdownContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    gap: 10,
  },

  timeBox: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 70,
  },

  timeNumber: {
    fontSize: 22,
    color: COLORS.accent,
    fontFamily: 'Cinzel_400Regular',
  },

  timeLabel: {
    fontSize: 12,
    color: COLORS.text,
    fontFamily: 'Inter_400Regular',
  },

  banner: {
    width: '100%',
    height: 200,
  },

  countdownHeader: {
    alignItems: 'center',
    marginTop: 20,
  },

  countdownText: {
    color: COLORS.text,
    marginTop: 8,
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },

  //ABA INGRESSOS
  ticketCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 12,
    padding: 15,
    marginTop: 16,
    backgroundColor: 'rgba(255,255,255,0.02)',
  },

  ticketTitle: {
    fontSize: 18,
    color: COLORS.accent,
    fontFamily: 'Cinzel_700Bold',
    marginBottom: 4,
  },

  ticketPrice: {
    color: COLORS.text,
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 10,
  },

  ticketText: {
    color: COLORS.text,
    fontFamily: 'Inter_600SemiBold',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    gap: 20,
  },

  quantityButton: {
    fontSize: 26,
    color: COLORS.accent,
    paddingHorizontal: 10,
  },

  quantityText: {
    fontSize: 18,
    color: COLORS.text,
  },

  subtotal: {
    marginTop: 10,
    color: COLORS.text,
    fontSize: 14,
    opacity: 0.7,
  },

  total: {
    marginTop: 30,
    fontSize: 22,
    color: COLORS.accent,
    textAlign: 'center',
    fontFamily: 'Cinzel_700Bold',
  },

  // CARD DO INGRESSO
  ticketPreview: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.accent,
    backgroundColor: COLORS.backgroundTicket,
    overflow: 'hidden',
  },

  ticketBanner: {
    width: '100%',
    height: 180,
  },

  ticketHeader: {
    fontSize: 16,
    color: COLORS.accent,
    marginBottom: 10,
  },

  ticketName: {
    fontSize: 22,
    color: COLORS.text,
    fontFamily: 'Cinzel_700Bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  ticketContent: {
    padding: 15,
    alignItems: 'center',
  },

  ticketDivider: {
    height: 1,
    backgroundColor: COLORS.accent,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  ticketInfo: {
    color: COLORS.text,
    fontSize: 14,
    marginBottom: 5,
  },

  ticketFooter: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.text,
    opacity: 0.6,
    textAlign: 'center',
  },

  ticketId: {
    color: COLORS.text,
    fontSize: 18,
    opacity: 0.6,
    marginBottom: 10,
    textAlign: 'center',
  },

  barcodeContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },

  barcode: {
    width: 260,
    height: 30,
    alignSelf: 'center',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '90%',
  },

  closeButton: {
    position: 'absolute',
    top: -40,
    right: 0,
    zIndex: 10,
  },
});
