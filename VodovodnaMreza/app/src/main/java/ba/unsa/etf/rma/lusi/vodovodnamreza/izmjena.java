package ba.unsa.etf.rma.lusi.vodovodnamreza;

import android.os.Parcel;
import android.os.Parcelable;

import java.io.Serializable;


/**
 * Created by Lusi on 4/5/2018.
 */

public class izmjena  implements Serializable, Parcelable {
    private String nazivIzmjene;
    private String lokacija;
    private String nivoVodostaja;
    private String brojKriticnihCijevi;
    private String datum;
    private String korisnik;

    public String getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(String korisnik) {
        this.korisnik = korisnik;
    }



public izmjena(){}

public izmjena(String naziv, String lok, String nivo, String broj, String d, String k){
nazivIzmjene=naziv;
      lokacija=lok;
      nivoVodostaja=nivo;
      brojKriticnihCijevi=broj;
      datum=d;
    korisnik=k;
  }

    protected izmjena(Parcel in) {
        nazivIzmjene = in.readString();
        lokacija= in.readString();
        nivoVodostaja=in.readString();
        brojKriticnihCijevi=in.readString();

        datum=in.readString();
        korisnik=in.readString();
    }
    public static final Creator<izmjena> CREATOR = new Creator<izmjena>() {
        @Override
        public izmjena createFromParcel(Parcel in) {
            return new izmjena(in);
        }

        @Override
        public izmjena[] newArray(int size) {
            return new izmjena [size];
        }
    };
    public String getNazivIzmjene() {
        return nazivIzmjene;
    }

    public void setNazivIzmjene(String nazivIzmjene) {
        this.nazivIzmjene = nazivIzmjene;
    }

    public String getLokacija() {
        return lokacija;
    }

    public void setLokacija(String lokacija) {
        this.lokacija = lokacija;
    }

    public String getNivoVodostaja() {
        return nivoVodostaja;
    }

    public void setNivoVodostaja(String nivoVodostaja) {
        this.nivoVodostaja = nivoVodostaja;
    }

    public String getBrojKriticnihCijevi() {
        return brojKriticnihCijevi;
    }

    public void setBrojKriticnihCijevi(String brojKriticnihCijevi) {
        this.brojKriticnihCijevi = brojKriticnihCijevi;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }
    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(nazivIzmjene);
        dest.writeString(lokacija);
        dest.writeString(datum);
        dest.writeString(brojKriticnihCijevi);
        dest.writeString(nivoVodostaja);
        dest.writeString(korisnik);
    }
}
